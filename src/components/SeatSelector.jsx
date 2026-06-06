export default function SeatSelector({ layout, selectedSeats, onToggleSeat }) {
  return (
    <div className="space-y-4">
      <div className="grid max-w-xl grid-cols-8 gap-3 rounded-3xl bg-slate-100 p-5 dark:bg-slate-900 sm:grid-cols-10">
        {layout.map((seat) => {
          const isSelected = selectedSeats.includes(seat.id);
          return (
            <button
              key={seat.id}
              type="button"
              onClick={() => onToggleSeat(seat.id)}
              disabled={seat.status !== 'available'}
              className={`aspect-square rounded-2xl text-xs font-semibold transition ${seat.status === 'booked' ? 'cursor-not-allowed bg-red-500 text-white' : seat.status === 'reserved' ? 'cursor-not-allowed bg-amber-400 text-slate-950' : isSelected ? 'bg-brand-500 text-white shadow-lg' : 'bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'}`}
            >
              {seat.label}
            </button>
          );
        })}
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="font-semibold text-slate-800 dark:text-slate-100">Available</p>
          <span className="text-slate-500 dark:text-slate-400">Green seats are open</span>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="font-semibold text-slate-800 dark:text-slate-100">Reserved</p>
          <span className="text-slate-500 dark:text-slate-400">Yellow seats are reserved</span>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="font-semibold text-slate-800 dark:text-slate-100">Booked</p>
          <span className="text-slate-500 dark:text-slate-400">Red seats are unavailable</span>
        </div>
      </div>
    </div>
  );
}
