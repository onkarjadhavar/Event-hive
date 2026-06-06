import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEvent } from '../context/EventContext.jsx';
import EventCard from '../components/EventCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import CategoryFilter from '../components\CategoryFilter.jsx';
import Loader from '../components/Loader.jsx';

const categories = ['All', 'Music', 'Technology', 'Business', 'Cultural', 'Sports', 'Workshops', 'Technical'];

export default function Home() {
  const { filteredEvents, loading, error, filters, updateFilters } = useEvent();
  const [search, setSearch] = useState('');

  const featured = filteredEvents.slice(0, 4);
  const upcoming = filteredEvents.filter((event) => new Date(event.date) > new Date()).slice(0, 4);
  const trending = [...filteredEvents].sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="grid gap-6 rounded-4xl bg-brand-500 px-6 py-12 text-white shadow-xl sm:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/90">Discover Events</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">Find the best events, book tickets and manage your bookings with ease.</h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">Browse curated events across music, tech, business, culture and sports. Enjoy a streamlined booking experience designed for every device.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">Search Events</h2>
            <SearchBar value={search} onChange={(value) => { setSearch(value); updateFilters({ search: value }); }} placeholder="Search by name, category or city" />
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">Event Categories</h2>
            <CategoryFilter categories={categories} selected={filters.category} onSelect={(category) => updateFilters({ category })} />
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-500">Featured</p>
            <h2 className="text-3xl font-semibold">Featured Events</h2>
          </div>
          <Link to="/events" className="btn-secondary">View all events</Link>
        </div>
        {loading ? <Loader /> : error ? <p className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-slate-800 dark:border-rose-700/50 dark:bg-rose-950/50 dark:text-rose-100">{error}</p> : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((event) => <EventCard key={event.id} event={event} />)}
          </div>
        )}
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-500">Upcoming</p>
            <h2 className="text-3xl font-semibold">Upcoming Events</h2>
          </div>
          <Link to="/events" className="btn-secondary">Explore schedules</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-500">Trending</p>
            <h2 className="text-3xl font-semibold">Trending Events</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trending.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>
    </div>
  );
}
