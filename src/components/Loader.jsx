export default function Loader() {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-500 border-t-transparent"></div>
        <p className="text-sm font-medium">Loading events...</p>
      </div>
    </div>
  );
}
