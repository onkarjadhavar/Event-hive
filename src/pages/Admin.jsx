import { useMemo, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { useBooking } from '../context/BookingContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const adminCredentials = { email: 'admin@eventhive.com', password: 'admin123' };

export default function Admin() {
  const { bookings } = useBooking();
  const { users } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.amount, 0);
  const bookingStatusCounts = useMemo(() => ({
    Confirmed: bookings.filter((item) => item.status === 'Confirmed').length,
    Pending: bookings.filter((item) => item.status === 'Pending').length,
    Cancelled: bookings.filter((item) => item.status === 'Cancelled').length,
  }), [bookings]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (credentials.email === adminCredentials.email && credentials.password === adminCredentials.password) {
      setIsLoggedIn(true);
      setError('');
      return;
    }
    setError('Invalid admin credentials');
  };

  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-lg rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Admin Login</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Secure admin access to manage events, users, and bookings.</p>
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <label className="block text-sm text-slate-700 dark:text-slate-200">Email
            <input value={credentials.email} onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
          </label>
          <label className="block text-sm text-slate-700 dark:text-slate-200">Password
            <input type="password" value={credentials.password} onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
          </label>
          {error && <p className="text-sm text-rose-500">{error}</p>}
          <button type="submit" className="btn-primary w-full">Sign in</button>
        </form>
      </div>
    );
  }

  const revenueData = {
    labels: ['Revenue'],
    datasets: [{ label: 'Total Revenue', data: [totalRevenue], backgroundColor: ['#2563eb'] }],
  };

  const statusData = {
    labels: Object.keys(bookingStatusCounts),
    datasets: [{ data: Object.values(bookingStatusCounts), backgroundColor: ['#22c55e', '#f59e0b', '#ef4444'] }],
  };

  return (
    <div className="space-y-8">
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Events</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{30}</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Users</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{users.length}</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Bookings</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{bookings.length}</p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Revenue</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">₹{totalRevenue}</p>
        </div>
      </section>
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Revenue Overview</h2>
          <div className="mt-6"><Bar data={revenueData} options={{ responsive: true, plugins: { legend: { display: false } } }} /></div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Booking Status</h2>
          <div className="mt-6"><Doughnut data={statusData} /></div>
        </div>
      </section>
    </div>
  );
}
