import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  useEffect(() => {
    if (!booking) {
      navigate('/');
    }
  }, [booking, navigate]);

  if (!booking) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-4xl text-emerald-500">✓</div>
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">Booking Confirmed!</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Your booking is complete. Scroll down for your ticket summary and next steps.</p>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">Booking ID: <span className="font-semibold text-slate-900 dark:text-white">{booking.id}</span></p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Event Summary</h2>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
            <div className="flex justify-between"><span>Event</span><span>{booking.event.title}</span></div>
            <div className="flex justify-between"><span>Date</span><span>{booking.event.date}</span></div>
            <div className="flex justify-between"><span>Seats</span><span>{booking.seats.join(', ')}</span></div>
            <div className="flex justify-between"><span>Amount</span><span>₹{booking.amount}</span></div>
            <div className="flex justify-between"><span>Status</span><span className="text-emerald-600">{booking.status}</span></div>
          </div>
        </div>
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950">
          <button onClick={() => window.print()} className="btn-primary w-full">Print Ticket</button>
          <button onClick={() => navigate('/dashboard')} className="btn-secondary w-full">View My Bookings</button>
        </div>
      </section>
    </motion.div>
  );
}
