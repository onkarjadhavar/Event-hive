import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'History', to: '/history' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white">E</span>
          Event Hive
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-brand-500 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="btn-secondary h-11 w-11 rounded-full p-0 text-lg">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          {isAuthenticated ? (
            <div className="hidden items-center gap-3 md:flex">
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                <FiUser /> {user.name}
              </Link>
              <button onClick={handleLogout} className="btn-primary">Logout</button>
            </div>
          ) : (
            <div className="hidden items-center gap-3 md:flex">
              <Link to="/login" className="btn-secondary">Login</Link>
              <Link to="/register" className="btn-primary">Register</Link>
            </div>
          )}
          <button onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/70 dark:bg-slate-950">
          <div className="space-y-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-2xl px-4 py-3 text-base font-medium transition ${isActive ? 'bg-brand-500 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'}`}>
                {item.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              {isAuthenticated ? (
                <button onClick={handleLogout} className="btn-primary w-full">Logout</button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="btn-secondary w-full text-center">Login</Link>
                  <Link to="/register" onClick={() => setOpen(false)} className="btn-primary w-full text-center">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
