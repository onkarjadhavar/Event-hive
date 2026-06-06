import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { loadFromStorage, saveToStorage } from '../services/storage.js';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [cart, setCart] = useState(loadFromStorage('cart', { seats: [], event: null }));
  const [bookings, setBookings] = useState(loadFromStorage('bookings', []));
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    saveToStorage('cart', cart);
  }, [cart]);

  useEffect(() => {
    saveToStorage('bookings', bookings);
  }, [bookings]);

  const addSeat = (seat) => {
    setCart((prev) => ({ ...prev, seats: [...prev.seats, seat] }));
  };

  const removeSeat = (seat) => {
    setCart((prev) => ({ ...prev, seats: prev.seats.filter((item) => item !== seat) }));
  };

  const setEvent = (event) => {
    setCart((prev) => ({ ...prev, event }));
  };

  const clearCart = () => setCart({ seats: [], event: null });

  const addBooking = (booking) => {
    setBookings((prev) => [booking, ...prev]);
    setToast({ type: 'success', message: 'Booking confirmed successfully' });
  };

  const cancelBooking = (id) => {
    setBookings((prev) => prev.map((booking) => (booking.id === id ? { ...booking, status: 'Cancelled' } : booking)));
    setToast({ type: 'info', message: 'Booking cancelled' });
  };

  const value = useMemo(
    () => ({ cart, bookings, loading, setLoading, addSeat, removeSeat, setEvent, clearCart, addBooking, cancelBooking, toast, setToast }),
    [cart, bookings, loading, toast]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};

export const useBooking = () => useContext(BookingContext);
