import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function ForgotPassword() {
  const { users } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = users.find((user) => user.email === email);
    if (found) {
      setMessage('Password recovery email sent. Check your inbox.');
      return;
    }
    setMessage('No account was found with that email address.');
  };

  return (
    <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Forgot password</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Enter your email and we’ll send reset instructions.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm text-slate-700 dark:text-slate-200">Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
        </label>
        <button type="submit" className="btn-primary w-full">Send recovery email</button>
      </form>
      {message && <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{message}</p>}
      <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">Remembered? <Link to="/login" className="font-semibold text-brand-500">Login</Link></p>
    </div>
  );
}
