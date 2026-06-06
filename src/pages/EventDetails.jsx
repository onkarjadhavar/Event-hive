import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEvent } from '../context/EventContext.jsx';
import { useBooking } from '../context/BookingContext.jsx';
import TicketCard from '../components/TicketCard.jsx';
import Loader from '../components/Loader.jsx';

const ticketOptions = [
  { type: 'Regular', price: 499, seats: 120 },
  { type: 'VIP', price: 999, seats: 50 },
  { type: 'Premium', price: 1499, seats: 20 },
];

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, loading, error } = useEvent();
  const { setEvent } = useBooking();
  const [selectedTicket, setSelectedTicket] = useState(ticketOptions[0].type);

  const event = useMemo(() => events.find((item) => item.id.toString() === id), [events, id]);

  useEffect(() => {
    if (!loading && !event) {
      navigate('/events');
    }
  }, [event, loading, navigate]);

  const handleReserve = () => {
    setEvent({ ...event, selectedTicket });
    navigate('/seat-selection');
  };

  if (loading) return <Loader />;
  if (error) return <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8 text-slate-800 dark:border-rose-700/50 dark:bg-rose-950/50 dark:text-rose-100">{error}</div>;
  if (!event) return null;

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-glass dark:border-slate-800 dark:bg-slate-900">
        <img src={event.image} alt={event.title} className="h-80 w-full object-cover" />
        <div className="space-y-6 p-8 md:flex md:items-start md:justify-between md:gap-10">
          <div className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-500">{event.category}</p>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{event.title}</h1>
            <p className="text-slate-600 dark:text-slate-300">{event.description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                <h3 className="text-sm font-semibold uppercase text-slate-500">Schedule</h3>
                <p className="mt-3 text-base text-slate-900 dark:text-slate-100">{event.date} • {event.time}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                <h3 className="text-sm font-semibold uppercase text-slate-500">Venue</h3>
                <p className="mt-3 text-base text-slate-900 dark:text-slate-100">{event.location}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Quick summary</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-200"><span>Total Seats</span><span>{event.availableSeats}</span></div>
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-200"><span>Remaining</span><span>{event.availableSeats - 10}</span></div>
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-200"><span>Base Price</span><span>₹{event.price}</span></div>
            </div>
            <button onClick={handleReserve} className="btn-primary w-full">Reserve Seat</button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Event Details</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{event.description} Enjoy an immersive program with expert speakers, practical sessions and curated entertainment.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
              <h3 className="font-semibold text-slate-900 dark:text-white">Organizer</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Event Hive Productions</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
              <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{event.location} Convention Center</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
            <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed`} title="venue map" className="h-64 w-full rounded-3xl border-0" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Ticket types</h2>
            <div className="mt-5 space-y-4">
              {ticketOptions.map((ticket) => (
                <TicketCard key={ticket.type} type={ticket.type} price={ticket.price} seats={ticket.seats} selected={selectedTicket} onSelect={setSelectedTicket} />
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Schedule overview</h2>
            <ul className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
              <li>10:00 AM — Opening keynote and networking</li>
              <li>12:30 PM — Panel discussions and workshops</li>
              <li>3:00 PM — Breakout sessions and demos</li>
              <li>5:30 PM — Closing remarks and afterparty</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
