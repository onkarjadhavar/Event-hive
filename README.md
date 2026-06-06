# Event Hive — Event Management & Booking Platform

A static browser-ready event booking website built with plain HTML, CSS, and JavaScript. It includes instant routing, booking flow, user auth, admin analytics, and LocalStorage persistence.

## Features

- Responsive multi-page event platform
- Dark / light mode toggle
- Event listing, filtering, and sorting
- Event details, seat selection, checkout, and booking confirmation
- User dashboard, booking history, and mock admin analytics
- LocalStorage persistence for users, bookings, and preferences
- Framer Motion animations and Chart.js analytics

## Setup

This project now includes a static browser-ready version that does not require Node, Vite, or a build step.

1. Open the workspace at `d:\event management`
2. Open `index.html` in your browser directly, or use VS Code Live Server / Go Live on the workspace root.
3. If you prefer a local server, run:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Go Live

For the current static site, you can deploy the workspace root directly to any static host.

- Use VS Code Live Server and point it at `index.html`
- Or deploy the project root as a static site to Vercel, Netlify, GitHub Pages, or any static hosting provider

> Note: The browser-ready version is served from `index.html` with `styles.css` and `app.js`. No build step is required.

## Production Deploy

- Vercel: deploy the project root and use `vercel.json`.
  

## Notes

- Admin login: `admin@eventhive.com` / `admin123`
- All data is powered by `src/data/events.json`
- Authentication and booking data are stored in LocalStorage

## Project structure

- `src/components` — reusable UI elements
- `src/pages` — page views for routing
- `src/context` — Context API state management
- `src/services` — mock API and LocalStorage helpers
- `src/data/events.json` — sample event data
