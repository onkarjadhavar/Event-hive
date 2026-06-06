import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const paymentMethods = ['Credit Card', 'Debit Card', 'UPI', 'Net Banking'];

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, addBooking, clearCart } = useBooking();
  const { user } = useAuth();
  const [values, setValues] = useState({ fullName: user.name || '', email: user.email || '', phone: '', address: '', payment: paymentMethods[0] });
  const [errors, setErrors] = useState({});

  const orderTotal = useMemo(() => {
    const base = cart.event?.price || 0;
    const subtotal = base * cart.seats.length;
    const taxes = Math.round(subtotal * 0.12);
    return { subtotal, taxes, total: subtotal + taxes };
  }, [cart]);

  const validate = () => {
    const next = {};
    if (!values.fullName) next.fullName = 'Full name is required';
    if (!values.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) next.email = 'Valid email required';
    if (!values.phone || !/^\d{10}$/.test(values.phone)) next.phone = 'Valid 10 digit phone required';
    if (!values.address) next.address = 'Address is required';
    if (!cart.seats.length) next.general = 'Select at least one seat before checkout';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    const booking = {
      id: `BK-${Date.now()}`,
      event: cart.event,
      seats: cart.seats,
      quantity: cart.seats.length,
      amount: orderTotal.total,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      userId: user.id,
      customer: values,
    };
    addBooking(booking);
    clearCart();
    navigate('/success', { state: { booking } });
  };

  if (!cart.event) return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">No event selected yet. Please choose seats first.</div>;

  return (
    <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
      <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Checkout</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Complete your booking</h1>
        </div>
        {errors.general && <div className="rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-700/50 dark:bg-rose-950/50 dark:text-rose-100">{errors.general}</div>}
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            Full Name
            <input value={values.fullName} onChange={(e) => setValues((prev) => ({ ...prev, fullName: e.target.value }))} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
            {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName}</p>}
          </label>
          <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            Email
            <input value={values.email} onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
            {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
          </label>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            Phone Number
            <input value={values.phone} onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
            {errors.phone && <p className="text-xs text-rose-500">{errors.phone}</p>}
          </label>
          <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            Payment Method
            <select value={values.payment} onChange={(e) => setValues((prev) => ({ ...prev, payment: e.target.value }))} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
              {paymentMethods.map((method) => <option key={method}>{method}</option>)}
            </select>
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
          Address
          <textarea value={values.address} onChange={(e) => setValues((prev) => ({ ...prev, address: e.target.value }))} rows="4" className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
          {errors.address && <p className="text-xs text-rose-500">{errors.address}</p>}
        </label>
        <button type="submit" className="btn-primary w-full">Confirm Booking</button>
      </form>

      <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Order summary</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Review your booking</h2>
        </div>
        <div className="space-y-4 rounded-[2rem] bg-white p-6 shadow-sm dark:bg-slate-900">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span>Event</span><span>{cart.event.title}</span></div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span>Seats</span><span>{cart.seats.join(', ')}</span></div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span>Quantity</span><span>{cart.seats.length}</span></div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span>Price</span><span>₹{orderTotal.subtotal}</span></div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span>Taxes</span><span>₹{orderTotal.taxes}</span></div>
          <div className="border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900 dark:border-slate-800 dark:text-slate-100"><span>Total</span><span>₹{orderTotal.total}</span></div>
        </div>
      </aside>
    </div>
  );
}
