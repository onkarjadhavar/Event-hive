import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [values, setValues] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const success = register(values.name, values.email, values.password);
    if (success) navigate('/dashboard');
  };

  return (
    <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Create account</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Join Event Hive to save favorites, book tickets and manage events easily.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm text-slate-700 dark:text-slate-200">Full Name
          <input value={values.name} onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))} className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
        <label className="block text-sm text-slate-700 dark:text-slate-200">Email
          <input value={values.email} onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} type="email" className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
        <label className="block text-sm text-slate-700 dark:text-slate-200">Password
          <input value={values.password} onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))} type="password" className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
        <button type="submit" className="btn-primary w-full">Register</button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">Already have an account? <Link to="/login" className="font-semibold text-brand-500">Login</Link></p>
    </div>
  );
}
