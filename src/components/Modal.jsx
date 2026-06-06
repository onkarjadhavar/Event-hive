export default function Modal({ isOpen, title, children, onClose, footer }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4 pb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
          </div>
          <button onClick={onClose} className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">Close</button>
        </div>
        <div className="space-y-4">{children}</div>
        {footer && <div className="mt-6 border-t border-slate-200/70 pt-4 dark:border-slate-800/70">{footer}</div>}
      </div>
    </div>
  );
}
