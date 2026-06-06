import { useMemo, useState } from 'react';
import { useEvent } from '../context/EventContext.jsx';
import EventCard from '../components/EventCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import Loader from '../components/Loader.jsx';
import Pagination from '../components/Pagination.jsx';

const categories = ['All', 'Music', 'Technology', 'Business', 'Cultural', 'Sports', 'Workshops', 'Technical'];
const locations = ['All', 'Pune', 'Mumbai', 'Bengaluru', 'Delhi', 'Chennai', 'Goa', 'Kolkata', 'Hyderabad', 'Jaipur'];

export default function Events() {
  const { filteredEvents, loading, error, filters, updateFilters } = useEvent();
  const [page, setPage] = useState(1);
  const perPage = 8;
  const totalPages = Math.ceil(filteredEvents.length / perPage);
  const paged = useMemo(() => filteredEvents.slice((page - 1) * perPage, page * perPage), [filteredEvents, page]);

  return (
    <div className="space-y-10">
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="md:flex md:items-center md:justify-between md:gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Event Listing</p>
            <h1 className="mt-2 text-3xl font-semibold">Find your perfect event</h1>
          </div>
          <SearchBar value={filters.search} onChange={(value) => updateFilters({ search: value })} />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Category</label>
            <select value={filters.category} onChange={(event) => updateFilters({ category: event.target.value })} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
              {categories.map((category) => <option key={category}>{category}</option>)}
            </select>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Location</label>
            <select value={filters.location} onChange={(event) => updateFilters({ location: event.target.value })} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
              {locations.map((location) => <option key={location}>{location}</option>)}
            </select>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Date</label>
            <input type="date" value={filters.date} onChange={(event) => updateFilters({ date: event.target.value })} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Price Range</label>
            <input type="range" min="100" max="2000" step="100" value={filters.price} onChange={(event) => updateFilters({ price: Number(event.target.value) })} className="w-full" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Up to ₹{filters.price}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">{filteredEvents.length} events available</div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Sort by</span>
            <select value={filters.sort} onChange={(event) => updateFilters({ sort: event.target.value })} className="rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
              <option value="date">Date</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
      </section>

      {loading ? <Loader /> : error ? <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-slate-800 dark:border-rose-700/50 dark:bg-rose-950/50 dark:text-rose-100">{error}</div> : (
        <>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paged.length ? paged.map((event) => <EventCard key={event.id} event={event} />) : <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">No events match your filters. Try adjusting search terms or filters.</div>}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}
    </div>
  );
}
