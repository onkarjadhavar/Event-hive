import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { loadFromStorage, saveToStorage } from '../services/storage.js';

const AuthContext = createContext();

const initialUser = {
  id: 'guest',
  name: 'Guest User',
  email: '',
  bookings: [],
  wishlist: [],
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(loadFromStorage('user', null));
  const [users, setUsers] = useState(loadFromStorage('users', []));
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    saveToStorage('user', user);
  }, [user]);

  useEffect(() => {
    saveToStorage('users', users);
  }, [users]);

  const login = (email, password) => {
    const existing = users.find((item) => item.email === email && item.password === password);
    if (existing) {
      setUser(existing);
      setNotification({ type: 'success', message: 'Welcome back!' });
      return true;
    }
    setNotification({ type: 'error', message: 'Invalid credentials' });
    return false;
  };

  const register = (name, email, password) => {
    const exists = users.some((item) => item.email === email);
    if (exists) {
      setNotification({ type: 'error', message: 'Email already registered' });
      return false;
    }
    const newUser = { id: Date.now().toString(), name, email, password, bookings: [], wishlist: [] };
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);
    setNotification({ type: 'success', message: 'Account created successfully!' });
    return true;
  };

  const logout = () => {
    setUser(null);
    setNotification({ type: 'success', message: 'Logged out successfully' });
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    setUsers((prev) => prev.map((item) => (item.id === updatedUser.id ? updatedUser : item)));
    setNotification({ type: 'success', message: 'Profile updated' });
  };

  const addBookmark = (eventId) => {
    if (!user) return;
    const updated = { ...user, wishlist: [...new Set([...(user.wishlist || []), eventId])] };
    setUser(updated);
    setUsers((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
  };

  const removeBookmark = (eventId) => {
    if (!user) return;
    const updated = { ...user, wishlist: (user.wishlist || []).filter((id) => id !== eventId) };
    setUser(updated);
    setUsers((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
  };

  const value = useMemo(
    () => ({
      user: user || initialUser,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
      updateProfile,
      addBookmark,
      removeBookmark,
      notification,
      setNotification,
      users,
    }),
    [user, users, notification]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
