import { useMemo, useState } from 'react';
import { useBooking } from '../context/BookingContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const statuses = ['All', 'Confirmed', 'Cancelled', 'Pending'];

export default function BookingHistory() {
  const { bookings } = useBooking();
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');

  const filtered = useMemo(() => bookings.filter((booking) => {
    if (booking.userId !== user.id) return false;
    const searchTerm = search.toLowerCase();
    const matchesText = booking.event.title.toLowerCase().includes(searchTerm) || booking.id.toLowerCase().includes(searchTerm);
    const matchesStatus = status === 'All' || booking.status === status;
    return matchesText && matchesStatus;
  }), [bookings, search, status, user.id]);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Booking history</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Your recent activity</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search bookings" className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
              {statuses.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="overflow-x-auto rounded-[2rem] bg-white shadow-sm dark:bg-slate-900">
          <table className="min-w-full divide-y divide-slate-200 text-left dark:divide-slate-800">
            <thead className="bg-slate-100 text-sm uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-950 dark:text-slate-300">
              <tr>
                <th className="px-6 py-4">Booking ID</th>
                <th className="px-6 py-4">Event</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Seats</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filtered.length ? filtered.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{booking.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{booking.event.title}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{booking.event.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{booking.seats.join(', ')}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">₹{booking.amount}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{booking.status}</td>
                </tr>
              )) : <tr><td colSpan="6" className="px-6 py-12 text-center text-sm text-slate-500 dark:text-slate-400">No bookings found. Book events to see history here.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
