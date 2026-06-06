export default function SearchBar({ value, onChange, placeholder = 'Search events, categories or locations' }) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
      />
    </div>
  );
}
