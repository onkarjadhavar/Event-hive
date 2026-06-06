import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { EventProvider } from './context/EventContext.jsx';
import { BookingProvider } from './context/BookingContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <EventProvider>
          <BookingProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </BookingProvider>
        </EventProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
