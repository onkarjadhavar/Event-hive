import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchEvents } from '../services/api.js';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ search: '', category: 'All', date: '', location: 'All', price: 1000, sort: 'date' });

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError('Unable to fetch events.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const updateFilters = (updates) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const filteredEvents = useMemo(() => {
    const active = events.filter((event) => {
      const matchesSearch = event.title.toLowerCase().includes(filters.search.toLowerCase()) || event.category.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = filters.category === 'All' || event.category === filters.category;
      const matchesLocation = filters.location === 'All' || event.location === filters.location;
      const matchesDate = !filters.date || event.date === filters.date;
      const matchesPrice = event.price <= filters.price;
      return matchesSearch && matchesCategory && matchesLocation && matchesDate && matchesPrice;
    });

    const sorted = [...active];
    if (filters.sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (filters.sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (filters.sort === 'popularity') sorted.sort((a, b) => b.popularity - a.popularity);
    if (filters.sort === 'date') sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    return sorted;
  }, [events, filters]);

  const value = useMemo(
    () => ({ events, loading, error, filters, updateFilters, filteredEvents }),
    [events, loading, error, filters, filteredEvents]
  );

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
};

export const useEvent = () => useContext(EventContext);
