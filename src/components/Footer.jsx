import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/95 py-10 text-slate-700 shadow-inner dark:border-slate-800/70 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Event Hive</h2>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">A responsive event management and booking solution with modern UI, intuitive workflows, and smooth booking experiences.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link to="/events" className="hover:text-brand-500">Browse Events</Link>
          <Link to="/dashboard" className="hover:text-brand-500">My Dashboard</Link>
          <Link to="/admin" className="hover:text-brand-500">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
