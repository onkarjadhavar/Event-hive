export default function Pagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-100 p-3 dark:bg-slate-900">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onChange(index + 1)}
          className={`h-10 w-10 rounded-full text-sm font-semibold transition ${currentPage === index + 1 ? 'bg-brand-500 text-white' : 'bg-white text-slate-700 shadow-sm hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
