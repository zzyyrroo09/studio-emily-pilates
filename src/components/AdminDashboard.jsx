import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';
import {
  X,
  LogIn,
  LogOut,
  Loader2,
  Calendar,
  User,
  Phone,
  Mail,
  Clock,
  Target,
  AlertTriangle,
  ChevronDown,
} from 'lucide-react';
import { auth, db, hasValidConfig } from '../firebase';
import { cn } from '../lib/utils';

const statusColors = {
  Pending:   'bg-amber-100 text-amber-800 border-amber-200',
  Confirmed: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Completed: 'bg-ocean-100 text-ocean-700 border-ocean-200',
};

const statusOptions = ['Pending', 'Confirmed', 'Completed'];

export default function AdminDashboard({ open, onClose }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [authChecked, setAuthChecked] = useState(false);

  // Auth state listener
  useEffect(() => {
    if (!auth) {
      setAuthChecked(true);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthChecked(true);
    });
    return unsubscribe;
  }, []);

  // Bookings real-time listener
  useEffect(() => {
    if (!user || !db) return;
    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snap) => {
      setBookings(
        snap.docs.map((d) => ({ id: d.id, ...d.data() }))
      );
    });
    return unsubscribe;
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!auth) {
      setLoginError('Firebase is not configured.');
      return;
    }
    setLoginLoading(true);
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setLoginError(
        err.code === 'auth/invalid-credential'
          ? 'Invalid email or password.'
          : err.mesocean
      );
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    if (auth) await signOut(auth);
    setUser(null);
    setBookings([]);
  };

  const updateStatus = async (bookingId, newStatus) => {
    if (!db) return;
    try {
      await updateDoc(doc(db, 'bookings', bookingId), { status: newStatus });
    } catch (err) {
      console.error('Status update error:', err);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ocean-950/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ocean-100">
          <h2 className="font-serif text-xl font-semibold text-ocean-900">
            Instructor Admin Portal
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-ocean-50 text-ocean-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Firebase not configured */}
          {!hasValidConfig && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-driftwood-100 border border-driftwood-200 text-driftwood-800 text-sm">
              <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
              <p>
                Firebase is not configured. Add your credentials to{' '}
                <code className="bg-driftwood-200 px-1 rounded">.env.local</code>{' '}
                and restart the server to enable authentication and the live
                booking dashboard.
              </p>
            </div>
          )}

          {/* Auth check loading */}
          {hasValidConfig && !authChecked && (
            <div className="flex items-center justify-center py-16">
              <Loader2 size={24} className="animate-spin text-ocean-400" />
            </div>
          )}

          {/* Login form */}
          {((!user && authChecked && hasValidConfig) || !hasValidConfig) &&
            hasValidConfig && (
              <form
                onSubmit={handleLogin}
                className="max-w-sm mx-auto space-y-4 py-8"
              >
                <div className="text-center mb-6">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-ocean-100 flex items-center justify-center mb-3">
                    <LogIn size={24} className="text-ocean-600" />
                  </div>
                  <p className="text-ocean-600 text-sm">
                    Sign in with your instructor account
                  </p>
                </div>

                {loginError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                    {loginError}
                  </div>
                )}

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-xl bg-ocean-50 border border-ocean-200 text-ocean-900 placeholder:text-ocean-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all text-sm"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl bg-ocean-50 border border-ocean-200 text-ocean-900 placeholder:text-ocean-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-ocean-600 hover:bg-ocean-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors"
                >
                  {loginLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <LogIn size={16} />
                  )}
                  Sign In
                </button>
              </form>
            )}

          {/* Dashboard */}
          {user && (
            <div>
              {/* User bar */}
              <div className="flex items-center justify-between mb-6 p-3 rounded-2xl bg-ocean-50">
                <p className="text-sm text-ocean-600">
                  Signed in as{' '}
                  <span className="font-medium text-ocean-800">
                    {user.email}
                  </span>
                </p>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-sm text-ocean-500 hover:text-ocean-700 transition-colors"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </div>

              {/* Bookings */}
              {bookings.length === 0 ? (
                <div className="text-center py-16 text-ocean-400">
                  <Calendar size={32} className="mx-auto mb-3 opacity-50" />
                  <p>No bookings yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-ocean-500">
                    {bookings.length} booking
                    {bookings.length !== 1 ? 's' : ''}
                  </p>
                  {bookings.map((b) => (
                    <BookingCard
                      key={b.id}
                      booking={b}
                      onStatusChange={updateStatus}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BookingCard({ booking, onStatusChange }) {
  const [open, setOpen] = useState(false);
  const b = booking;
  const dateStr = b.createdAt?.toDate
    ? b.createdAt.toDate().toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '—';

  return (
    <div className="rounded-2xl border border-ocean-100 bg-white overflow-hidden hover:border-ocean-200 transition-colors">
      {/* Summary row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-ocean-100 flex items-center justify-center flex-shrink-0">
            <User size={16} className="text-ocean-600" />
          </div>
          <div className="min-w-0">
            <p className="font-medium text-ocean-900 text-sm truncate">
              {b.fullName}
            </p>
            <p className="text-xs text-ocean-400 truncate">{b.serviceType}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Status dropdown */}
          <select
            value={b.status || 'Pending'}
            onChange={(e) => {
              e.stopPropagation();
              onStatusChange(b.id, e.target.value);
            }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              'text-xs font-semibold px-3 py-1 rounded-full border cursor-pointer focus:outline-none',
              statusColors[b.status] || statusColors.Pending
            )}
          >
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className={cn(
              'text-ocean-400 transition-transform',
              open && 'rotate-180'
            )}
          />
        </div>
      </button>

      {/* Expanded details */}
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-ocean-50 grid sm:grid-cols-2 gap-3 text-sm">
          <Detail icon={Phone} label="Phone" value={b.phone} />
          <Detail icon={Mail} label="Email" value={b.email} />
          <Detail icon={Calendar} label="Preferred Date" value={b.preferredDate} />
          <Detail icon={Clock} label="Preferred Time" value={b.preferredTime} />
          {b.goals && (
            <div className="sm:col-span-2">
              <Detail icon={Target} label="Goals / Notes" value={b.goals} />
            </div>
          )}
          <p className="sm:col-span-2 text-xs text-ocean-400 mt-1">
            Submitted: {dateStr}
          </p>
        </div>
      )}
    </div>
  );
}

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <Icon size={14} className="text-ocean-400 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-xs text-ocean-400">{label}</p>
        <p className="text-ocean-800">{value || '—'}</p>
      </div>
    </div>
  );
}
