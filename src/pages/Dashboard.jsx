import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useBooking } from '../context/BookingContext.jsx';

const sections = ['Profile', 'My Bookings', 'Wishlist', 'Notifications'];

export default function Dashboard() {
  const { user, updateProfile } = useAuth();
  const { bookings } = useBooking();
  const [active, setActive] = useState('Profile');
  const [profile, setProfile] = useState({ name: user.name, email: user.email });

  const myBookings = bookings.filter((booking) => booking.userId === user.id);

  return (
    <div className="grid gap-8 xl:grid-cols-[280px_1fr]">
      <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Dashboard</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage your profile, bookings and wishlist from a single place.</p>
        </div>
        <nav className="space-y-2">
          {sections.map((item) => (
            <button key={item} onClick={() => setActive(item)} className={`w-full rounded-3xl px-4 py-3 text-left text-sm font-medium transition ${active === item ? 'bg-brand-500 text-white' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'}`}>
              {item}
            </button>
          ))}
        </nav>
      </aside>
      <div className="space-y-8">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Bookings</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{myBookings.length}</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Wishlist</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{user.wishlist?.length || 0}</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Notifications</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{3}</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Profile</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{user.name}</p>
          </div>
        </section>

        {active === 'Profile' && (
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Profile settings</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Update your information and keep your account current.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                Full Name
                <input value={profile.name} onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                Email
                <input value={profile.email} onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
              </label>
            </div>
            <button onClick={() => updateProfile(profile)} className="btn-primary mt-6">Save Changes</button>
          </section>
        )}

        {active === 'My Bookings' && (
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">My Bookings</h2>
            <div className="mt-6 space-y-4">
              {myBookings.length ? myBookings.map((booking) => (
                <div key={booking.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{booking.event.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{booking.event.date} • {booking.seats.join(', ')}</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">{booking.status}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                    <span>Amount ₹{booking.amount}</span>
                    <button className="rounded-full bg-brand-500 px-4 py-2 text-white">View Ticket</button>
                  </div>
                </div>
              )) : <p className="text-slate-500 dark:text-slate-400">No bookings yet. Explore events and book your first ticket.</p>}
            </div>
          </section>
        )}

        {active === 'Wishlist' && (
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Wishlist</h2>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
              <p>Save your favorite events and track them later.</p>
            </div>
          </section>
        )}

        {active === 'Notifications' && (
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Notifications</h2>
            <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">Your booking status was updated successfully.</li>
              <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">New event matches your interests.</li>
              <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">Don't miss early access deals on concerts.</li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
