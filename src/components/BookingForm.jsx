import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, hasValidConfig } from '../firebase';
import { cn } from '../lib/utils';

const serviceOptions = [
  'Private Reformer Pilates',
  'Private Mat Pilates',
  'Duet Reformer Pilates',
  'Duet Mat Pilates',
  'Small Group Mat Pilates',
];

const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  serviceType: '',
  preferredDate: '',
  preferredTime: '',
  goals: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.fullName.trim()) return 'Please enter your full name.';
    if (!form.phone.trim()) return 'Please enter your phone/Viber number.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      return 'Please enter a valid email address.';
    if (!form.serviceType) return 'Please select a service type.';
    if (!form.preferredDate) return 'Please select a preferred date.';
    if (!form.preferredTime) return 'Please select a preferred time slot.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const error = validate();
    if (error) {
      setErrorMsg(error);
      return;
    }

    if (!hasValidConfig || !db) {
      // Demo mode — pretend success
      setStatus('loading');
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('success');
      return;
    }

    setStatus('loading');
    try {
      await addDoc(collection(db, 'bookings'), {
        ...form,
        status: 'Pending',
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('Booking error:', err);
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
      setStatus('error');
    }
  };

  // Today's date for min-date
  const today = new Date().toISOString().split('T')[0];

  // Success state
  if (status === 'success') {
    return (
      <section id="booking" className="py-20 sm:py-28 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-sage-50 border border-sage-100">
            <CheckCircle2 className="mx-auto text-sage-600 mb-4" size={48} />
            <h3 className="font-serif text-2xl font-semibold text-sage-900 mb-2">
              Booking Submitted!
            </h3>
            <p className="text-sage-600 mb-6">
              Thank you for your interest! We'll review your request and reach
              out shortly via Viber or email to confirm your session.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors"
            >
              Book Another Session
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sage-500 font-medium text-sm uppercase tracking-widest mb-3">
            Book a Session
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-sage-900 mb-4">
            Ready to start your{' '}
            <span className="italic text-sage-600">journey</span>?
          </h2>
          <p className="text-sage-500 max-w-lg mx-auto">
            Fill out the form below and we'll reach out to confirm your
            preferred schedule.
          </p>
        </div>

        {/* Firebase not configured banner */}
        {!hasValidConfig && (
          <div className="mb-6 flex items-start gap-3 p-4 rounded-2xl bg-warm-100 border border-warm-200 text-warm-800 text-sm">
            <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
            <p>
              <strong>Demo mode:</strong> Firebase is not configured yet. The
              form will simulate a submission. Add your credentials to{' '}
              <code className="bg-warm-200 px-1 rounded">.env.local</code> and
              restart the server.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error message */}
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
              <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
              {errorMsg}
            </div>
          )}

          {/* Row: Name + Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="e.g. Maria Santos"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-1.5">
                Phone / Viber Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="09XX XXX XXXX"
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1.5">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1.5">
              Service Type <span className="text-red-400">*</span>
            </label>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className={cn(inputClass, !form.serviceType && 'text-sage-400')}
            >
              <option value="">Select a service…</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Date + Time */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-1.5">
                Preferred Date <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                min={today}
                className={cn(inputClass, !form.preferredDate && 'text-sage-400')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-1.5">
                Preferred Time Slot <span className="text-red-400">*</span>
              </label>
              <select
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                className={cn(inputClass, !form.preferredTime && 'text-sage-400')}
              >
                <option value="">Select a time…</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Goals / Notes */}
          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1.5">
              Fitness Goals / Notes
            </label>
            <textarea
              name="goals"
              value={form.goals}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals, injuries, or anything we should know…"
              className={cn(inputClass, 'resize-none')}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-sage-600 hover:bg-sage-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-2xl shadow-lg shadow-sage-600/20 transition-all hover:shadow-xl"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Send size={18} />
                Submit Booking Request
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

// Shared input styling
const inputClass =
  'w-full px-4 py-3 rounded-xl bg-sage-50 border border-sage-200 text-sage-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all text-sm';
