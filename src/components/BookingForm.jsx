import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, hasValidConfig } from '../firebase';
import emailjs from '@emailjs/browser';
import { cn } from '../lib/utils';

const serviceOptions = [
  'Private Reformer Pilates (₱1,600)',
  'Private Mat Pilates (₱1,600)',
  'Duet Reformer Pilates (₱1,200/person)',
  'Duet Mat Pilates (₱1,200/person)',
  'Small Group Mat Pilates (₱800/person)',
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
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
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
      // Demo mode
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

      // --- EMAIL NOTIFICATION LOGIC ---
      try {
        await emailjs.send(
          'service_ac8bpzs',     // 1. Replace with your EmailJS Service ID
          'template_jnib767',    // 2. Replace with your EmailJS Template ID
          {
            to_name: 'Emily',
            client_name: form.fullName,
            client_email: form.email,
            client_phone: form.phone,
            service_type: form.serviceType,
            preferred_date: form.preferredDate,
            preferred_time: form.preferredTime,
            goals: form.goals || 'No additional notes',
          },
          'pPtxEB7O1vn25Smxc'      // 3. Replace with your EmailJS Public Key
        );
      } catch (emailErr) {
        console.error('Email notification failed, but booking was saved:', emailErr);
      }
      // --------------------------------

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('Booking error:', err);
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
      setStatus('error');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  if (status === 'success') {
    return (
      <section id="booking" className="py-20 sm:py-32 bg-sand-50 relative">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-16 rounded-3xl bg-sand-50 border border-sand-100 shadow-xl shadow-sand-100/50">
            <CheckCircle2 className="mx-auto text-gold-500 mb-6" size={56} />
            <h3 className="font-serif text-3xl font-semibold text-ocean-900 mb-4">
              Request Sent!
            </h3>
            <p className="text-ocean-600 mb-8 leading-relaxed">
              Thank you for choosing Studio Emily Pilates. We'll review your request and reach
              out shortly via Viber or email to confirm your coastal session.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3.5 bg-ocean-800 text-white rounded-full font-medium hover:bg-ocean-900 transition-colors shadow-lg"
            >
              Book Another Session
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 sm:py-32 bg-sand-50 relative overflow-hidden">
      {/* Decorative Wave BG */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none" 
           style={{ background: 'radial-gradient(circle at top right, var(--color-ocean-50) 0%, transparent 50%)' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">
            Book a Session
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ocean-900 mb-4">
            Ready to start your{' '}
            <span className="italic text-ocean-600">journey</span>?
          </h2>
          <p className="text-ocean-600 max-w-lg mx-auto">
            Fill out the form below and we'll reach out to confirm your preferred schedule by the sea.
          </p>
        </div>

        {!hasValidConfig && (
          <div className="mb-8 flex items-start gap-3 p-4 rounded-2xl bg-driftwood-50 border border-driftwood-200 text-driftwood-800 text-sm shadow-sm">
            <AlertTriangle size={18} className="flex-shrink-0 mt-0.5 text-gold-600" />
            <p>
              <strong>Demo mode:</strong> Firebase is not configured yet. The
              form will simulate a submission. Add your credentials to{' '}
              <code className="bg-white px-1.5 py-0.5 rounded shadow-sm">.env.local</code>.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 p-8 sm:p-10 rounded-3xl bg-white shadow-2xl shadow-ocean-900/5 border border-ocean-50">
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm flex items-start gap-3 mb-6">
              <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
              {errorMsg}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-ocean-800 mb-2">
                Full Name <span className="text-gold-500">*</span>
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
              <label className="block text-sm font-semibold text-ocean-800 mb-2">
                Phone / Viber Number <span className="text-gold-500">*</span>
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

          <div>
            <label className="block text-sm font-semibold text-ocean-800 mb-2">
              Email Address <span className="text-gold-500">*</span>
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

          <div>
            <label className="block text-sm font-semibold text-ocean-800 mb-2">
              Service Type <span className="text-gold-500">*</span>
            </label>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className={cn(inputClass, !form.serviceType && 'text-ocean-400')}
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-ocean-800 mb-2">
                Preferred Date <span className="text-gold-500">*</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                min={today}
                className={cn(inputClass, !form.preferredDate && 'text-ocean-400')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ocean-800 mb-2">
                Preferred Time Slot <span className="text-gold-500">*</span>
              </label>
              <select
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                className={cn(inputClass, !form.preferredTime && 'text-ocean-400')}
              >
                <option value="">Select a time...</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-ocean-800 mb-2">
              Fitness Goals / Notes
            </label>
            <textarea
              name="goals"
              value={form.goals}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals, injuries, or anything we should know..."
              className={cn(inputClass, 'resize-none')}
            />
          </div>

          <div className="bg-sand-50/50 p-4 rounded-2xl border border-ocean-100 flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-600 flex-shrink-0 mt-0.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            <div className="text-sm text-ocean-800">
              <span className="font-semibold block mb-1">Payment Method</span>
              We accept payments via GCash: <strong>09560333082</strong>. Please settle your payment upon confirmation of your slot to secure your booking.
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 py-4 bg-ocean-800 hover:bg-ocean-900 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full shadow-lg shadow-ocean-900/20 transition-all hover:shadow-xl mt-4"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting...
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

const inputClass =
  'w-full px-5 py-3.5 rounded-2xl bg-sand-50/50 border border-ocean-100 text-ocean-900 placeholder:text-ocean-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all text-sm';
