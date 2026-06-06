export default function BookingForm({ values, onChange, onSubmit, errors }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
          Full Name
          <input value={values.fullName} onChange={(e) => onChange('fullName', e.target.value)} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
          {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName}</p>}
        </label>
        <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
          Email
          <input type="email" value={values.email} onChange={(e) => onChange('email', e.target.value)} className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" />
          {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
        </label>
      </div>
      <button type="submit" className="btn-primary">Continue</button>
    </form>
  );
}