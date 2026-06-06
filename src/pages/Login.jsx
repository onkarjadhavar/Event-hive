import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [values, setValues] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const success = login(values.email, values.password);
    if (success) navigate('/dashboard');
  };

  return (
    <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Welcome back</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Log in to manage bookings, view your dashboard and track events.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm text-slate-700 dark:text-slate-200">Email
          <input value={values.email} onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} type="email" className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
        <label className="block text-sm text-slate-700 dark:text-slate-200">Password
          <input value={values.password} onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))} type="password" className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
        <div className="flex items-center justify-between text-sm text-brand-500">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <button type="submit" className="btn-primary w-full">Login</button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">New here? <Link to="/register" className="font-semibold text-brand-500">Create an account</Link></p>
    </div>
  );
}
