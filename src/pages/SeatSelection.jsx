import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeatSelector from '../components/SeatSelector.jsx';
import { useBooking } from '../context/BookingContext.jsx';

const seatRows = ['A','B','C','D','E'];
const seatCols = 8;

export default function SeatSelection() {
  const navigate = useNavigate();
  const { cart, addSeat, removeSeat, clearCart, setEvent } = useBooking();
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    if (!cart.event) {
      navigate('/events');
      return;
    }
    const grid = seatRows.flatMap((row) => Array.from({ length: seatCols }, (_, index) => {
      const id = `${row}${index + 1}`;
      const status = Math.random() > 0.85 ? 'booked' : Math.random() > 0.8 ? 'reserved' : 'available';
      return { id, label: id, status };
    }));
    setLayout(grid);
  }, [cart.event, navigate]);

  const selectedSeats = cart.seats;

  const onToggleSeat = (seatId) => {
    const seat = layout.find((item) => item.id === seatId);
    if (!seat || seat.status !== 'available') return;
    if (selectedSeats.includes(seatId)) {
      removeSeat(seatId);
      return;
    }
    addSeat(seatId);
  };

  const totalPrice = useMemo(() => {
    if (!cart.event) return 0;
    const price = cart.event.price || 0;
    return selectedSeats.length * price;
  }, [cart.event, selectedSeats]);

  const handleProceed = () => {
    if (!selectedSeats.length) return;
    navigate('/checkout');
  };

  if (!cart.event) return null;

  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-500">Seat selection</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Choose your seats for {cart.event.title}</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Select the best available seats and confirm your booking for a smooth event experience.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400"><span>Ticket type</span><span>{cart.event.selectedTicket}</span></div>
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400"><span>Base price</span><span>₹{cart.event.price}</span></div>
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400"><span>Selected seats</span><span>{selectedSeats.length}</span></div>
              <div className="flex items-center justify-between text-lg font-semibold text-slate-900 dark:text-white"><span>Total</span><span>₹{totalPrice}</span></div>
              <button onClick={handleProceed} disabled={!selectedSeats.length} className={`btn-primary w-full ${!selectedSeats.length ? 'opacity-60 cursor-not-allowed' : ''}`}>
            Proceed to Checkout
          </button>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <SeatSelector layout={layout} selectedSeats={selectedSeats} onToggleSeat={onToggleSeat} />
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-5 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Selected Seats</p>
          <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{selectedSeats.length || 0}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Tap on the seat map to choose or remove seats.</p>
        </div>
        <div className="rounded-3xl bg-white p-5 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Ticket Count</p>
          <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{selectedSeats.length}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Each ticket is priced at ₹{cart.event.price}.</p>
        </div>
        <div className="rounded-3xl bg-white p-5 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Price Summary</p>
          <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">₹{totalPrice}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Includes base ticket value only. Taxes and fees will be calculated at checkout.</p>
        </div>
      </section>
    </div>
  );
}
