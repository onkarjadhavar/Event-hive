import { useEffect } from 'react';
import { useBooking } from '../context/BookingContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export function Toast() {
  const { toast, setToast } = useBooking();
  const { notification, setNotification } = useAuth();
  const active = toast || notification;
  const message = toast?.message || notification?.message;
  const type = toast?.type || notification?.type || 'info';

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      setToast?.(null);
      setNotification?.(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [active, setToast, setNotification]);

  if (!active) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
      <p className={`text-sm font-medium ${type === 'success' ? 'text-emerald-600' : type === 'error' ? 'text-rose-600' : 'text-slate-800'}`}>
        {message}
      </p>
    </div>
  );
}
