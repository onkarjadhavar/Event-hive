import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function EventCard({ event }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-glass transition dark:border-slate-800 dark:bg-slate-900"
    >
      <Link to={`/events/${event.id}`} className="block overflow-hidden">
        <img src={event.image} alt={event.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-brand-600">
          <span>{event.category}</span>
          <span>{event.location}</span>
        </div>
        <Link to={`/events/${event.id}`}>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{event.title}</h3>
        </Link>
        <p className="text-sm text-slate-500 dark:text-slate-400">{event.description.slice(0, 90)}...</p>
        <div className="grid gap-2 text-sm text-slate-600 dark:text-slate-400 sm:grid-cols-2">
          <span>{event.date} • {event.time}</span>
          <span>{event.availableSeats} seats left</span>
        </div>
        <div className="flex items-center justify-between pt-3">
          <span className="text-lg font-semibold text-slate-900 dark:text-white">₹{event.price}</span>
          <Link to={`/events/${event.id}`} className="btn-primary text-sm">Book Now</Link>
        </div>
      </div>
    </motion.article>
  );
}
