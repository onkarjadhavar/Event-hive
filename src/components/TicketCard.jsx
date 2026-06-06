export default function TicketCard({ type, price, seats, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(type)}
      className={`w-full rounded-3xl border p-5 text-left transition ${selected === type ? 'border-brand-500 bg-brand-500/10' : 'border-slate-200 bg-white hover:border-brand-500 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-brand-500'}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-lg font-semibold text-slate-900 dark:text-white">{type}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">₹{price}</span>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{seats} seats available</p>
    </button>
  );
}
