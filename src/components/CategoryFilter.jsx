export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className={`rounded-full border px-4 py-2 text-sm transition ${selected === item ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-brand-500 hover:text-brand-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800'}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
