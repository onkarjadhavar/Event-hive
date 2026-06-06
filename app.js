const STORAGE_KEYS = {
  user: 'eh-user',
  users: 'eh-users',
  bookings: 'eh-bookings',
  events: 'eh-events',
  cart: 'eh-cart',
  lastBooking: 'eh-last-booking',
  theme: 'eh-theme',
  admin: 'eh-admin',
};

const adminCredentials = { email: 'admin@eventhive.com', password: 'admin123' };

const defaultEvents = [
  { id: 1, title: 'TechFest 2026', category: 'Technology', date: '2026-08-15', time: '10:00 AM', location: 'Pune', price: 499, availableSeats: 150, popularity: 92, image: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1200&q=80', description: 'A premier tech gathering featuring workshops, startup showcases, speaker panels and immersive product demos.' },
  { id: 2, title: 'Rhythm Beats Live', category: 'Music', date: '2026-07-05', time: '7:30 PM', location: 'Mumbai', price: 1299, availableSeats: 60, popularity: 98, image: 'https://images.unsplash.com/photo-1508973377752-c63d6c947f90?auto=format&fit=crop&w=1200&q=80', description: 'Experience top artists, immersive lighting and a night of unforgettable beats in the city’s biggest concert hall.' },
  { id: 3, title: 'Startup Launchpad', category: 'Business', date: '2026-09-02', time: '9:00 AM', location: 'Bengaluru', price: 799, availableSeats: 120, popularity: 85, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80', description: 'A business leaders forum with investor networking, pitch competitions and growth strategy workshops.' },
  { id: 4, title: 'Art & Culture Fest', category: 'Cultural', date: '2026-10-12', time: '4:00 PM', location: 'Jaipur', price: 499, availableSeats: 180, popularity: 79, image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80', description: 'A vibrant cultural celebration with traditional performances, craft markets and heritage experiences.' },
  { id: 5, title: 'Code Sprint Challenge', category: 'Technical', date: '2026-11-20', time: '11:00 AM', location: 'Hyderabad', price: 299, availableSeats: 200, popularity: 87, image: 'https://images.unsplash.com/photo-1553897220-874a65d3d65d?auto=format&fit=crop&w=1200&q=80', description: 'A hands-on coding competition for budding developers, complete with hackathon prizes and mentorship sessions.' },
  { id: 6, title: 'Sports Carnival', category: 'Sports', date: '2026-09-25', time: '3:00 PM', location: 'Kolkata', price: 249, availableSeats: 90, popularity: 76, image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80', description: 'A fun, family-friendly sports event with live games, fitness clinics and athlete meet-and-greets.' },
  { id: 7, title: 'Creative Leadership Workshop', category: 'Workshops', date: '2026-08-28', time: '1:00 PM', location: 'Chennai', price: 349, availableSeats: 70, popularity: 68, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', description: 'A leadership skills workshop focused on creative problem solving, team alignment and modern coaching techniques.' },
  { id: 8, title: 'Jazz Nights', category: 'Music', date: '2026-09-16', time: '8:00 PM', location: 'Goa', price: 999, availableSeats: 45, popularity: 88, image: 'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1200&q=80', description: 'An elegant evening of jazz legends and smooth melodies in a luxurious coastal venue.' },
  { id: 9, title: 'Design Systems Bootcamp', category: 'Technical', date: '2026-07-19', time: '10:00 AM', location: 'Delhi', price: 699, availableSeats: 80, popularity: 81, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80', description: 'A top-tier workshop on building scalable design systems for product teams and developers.' },
  { id: 10, title: 'Yoga Retreat Weekend', category: 'Wellness', date: '2026-10-03', time: '7:00 AM', location: 'Rishikesh', price: 1499, availableSeats: 35, popularity: 90, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80', description: 'A rejuvenation retreat with yoga, meditation and wellness coaching by expert instructors.' },
  { id: 11, title: 'Cinema Under the Stars', category: 'Cultural', date: '2026-08-22', time: '8:30 PM', location: 'Pune', price: 349, availableSeats: 120, popularity: 83, image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80', description: 'A magical outdoor film screening featuring indie favorites and food stalls in a scenic park.' },
  { id: 12, title: 'Blockchain Expo', category: 'Technology', date: '2026-11-10', time: '10:30 AM', location: 'Mumbai', price: 899, availableSeats: 110, popularity: 94, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', description: 'A future-facing conference exploring blockchain innovation, crypto security and digital assets.' },
  { id: 13, title: 'Marathon City Run', category: 'Sports', date: '2026-12-01', time: '6:00 AM', location: 'Chennai', price: 199, availableSeats: 240, popularity: 74, image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80', description: 'A high-energy city marathon with hydration zones, live entertainment and participant medals.' },
  { id: 14, title: 'Photography Masterclass', category: 'Workshops', date: '2026-09-08', time: '2:00 PM', location: 'Bengaluru', price: 549, availableSeats: 50, popularity: 70, image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80', description: 'Practical photography sessions covering lighting, composition and editing for aspiring creatives.' },
  { id: 15, title: 'AI & Machine Learning Summit', category: 'Technology', date: '2026-10-25', time: '9:30 AM', location: 'Delhi', price: 1099, availableSeats: 90, popularity: 96, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', description: 'A summit for C-level executives and engineers focused on AI strategy, ethics and product design.' },
];

const defaultUsers = [
  { id: 'u-1', name: 'Event Lover', email: 'user@example.com', password: 'welcome123', wishlist: [], bookings: [] }
];

const paymentMethods = ['Credit Card', 'Debit Card', 'UPI', 'Net Banking'];
const ticketTypes = [
  { label: 'Regular', multiplier: 1 },
  { label: 'VIP', multiplier: 1.7 },
  { label: 'Premium', multiplier: 2.4 },
];

const helpers = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (err) {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getUser() {
    return this.get(STORAGE_KEYS.user, null);
  },
  setUser(user) {
    this.set(STORAGE_KEYS.user, user);
  },
  getUsers() {
    return this.get(STORAGE_KEYS.users, defaultUsers);
  },
  setUsers(users) {
    this.set(STORAGE_KEYS.users, users);
  },
  getEvents() {
    return this.get(STORAGE_KEYS.events, defaultEvents);
  },
  setEvents(events) {
    this.set(STORAGE_KEYS.events, events);
  },
  getBookings() {
    return this.get(STORAGE_KEYS.bookings, []);
  },
  setBookings(bookings) {
    this.set(STORAGE_KEYS.bookings, bookings);
  },
  getCart() {
    return this.get(STORAGE_KEYS.cart, null);
  },
  setCart(cart) {
    this.set(STORAGE_KEYS.cart, cart);
  },
  clearCart() {
    localStorage.removeItem(STORAGE_KEYS.cart);
  },
  getLastBooking() {
    return this.get(STORAGE_KEYS.lastBooking, null);
  },
  setLastBooking(booking) {
    this.set(STORAGE_KEYS.lastBooking, booking);
  },
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.theme) || 'light';
  },
  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  },
  getAdminSession() {
    return localStorage.getItem(STORAGE_KEYS.admin) === 'true';
  },
  setAdminSession(enabled) {
    localStorage.setItem(STORAGE_KEYS.admin, enabled ? 'true' : 'false');
  },
};

const state = {
  events: helpers.getEvents(),
  users: helpers.getUsers(),
  bookings: helpers.getBookings(),
  selectedCategory: 'All',
  selectedLocation: 'All',
  selectedDate: '',
  selectedPrice: 2000,
  selectedSort: 'date',
  searchQuery: '',
  selectedEventId: null,
  selectedTicket: ticketTypes[0].label,
  selectedSeats: [],
  theme: helpers.getTheme(),
};

const dom = {
  app: document.getElementById('app'),
  toast: document.getElementById('toast'),
  topNav: null,
};

const render = {
  nav() {
    return `
      <div class="container navbar">
        <a href="#home" class="brand">
          <span class="brand-mark">E</span>
          Event Hive
        </a>
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#history">History</a>
          <button class="btn-secondary" id="themeToggle">${state.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
          ${helpers.getUser() ? `<button class="btn" id="logoutButton">Logout</button>` : `<a class="btn primary" href="#login">Login</a>`}
        </div>
      </div>
    `;
  },
  footer() {
    return `
      <footer class="footer container">
        <div class="footer-top">
          <div>
            <h2>Event Hive</h2>
            <p>The modern event booking platform that runs instantly with Go Live.</p>
          </div>
          <div>
            <p><strong>Quick links</strong></p>
            <p><a href="#events">Browse Events</a></p>
            <p><a href="#dashboard">Dashboard</a></p>
            <p><a href="#admin">Admin</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Event Hive</span>
          <span>Built for fast deployment</span>
        </div>
      </footer>
    `;
  },
  hero() {
    return `
      <section class="hero section">
        <div class="container">
          <h1>Discover events, book tickets and manage your experiences instantly.</h1>
          <p>Explore curated event categories, reserve seats quickly, and access your dashboard with a responsive web experience.</p>
          <div style="margin-top: 28px; display: flex; gap: 14px; flex-wrap: wrap;">
            <a class="btn" href="#events">Browse Events</a>
            <a class="btn-secondary" href="#login">Get Started</a>
          </div>
        </div>
      </section>
    `;
  },
  featured(events) {
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Featured</p>
            <h2>Featured events</h2>
          </div>
          <a class="btn-secondary" href="#events">View all events</a>
        </div>
        <div class="event-grid">
          ${events.slice(0, 4).map(this.eventCard).join('')}
        </div>
      </section>
    `;
  },
  categories() {
    const categories = ['All', 'Music', 'Technology', 'Business', 'Cultural', 'Sports', 'Workshops', 'Technical', 'Wellness'];
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Browse</p>
            <h2>Event categories</h2>
          </div>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          ${categories.map((category) => `<button class="badge ${state.selectedCategory === category ? 'brand' : 'muted'}" onclick="app.filterByCategory('${category}')">${category}</button>`).join('')}
        </div>
      </section>
    `;
  },
  trending(events) {
    const trending = [...events].sort((a,b)=>b.popularity-a.popularity).slice(0,4);
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Trending</p>
            <h2>Trending events</h2>
          </div>
        </div>
        <div class="event-grid">
          ${trending.map(this.eventCard).join('')}
        </div>
      </section>
    `;
  },
  eventCard(event) {
    return `
      <article class="event-card">
        <img src="${event.image}" alt="${event.title}">
        <div class="event-card-body">
          <span class="badge muted">${event.category}</span>
          <h3 class="event-card-title">${event.title}</h3>
          <p>${event.description.slice(0, 96)}...</p>
          <div class="event-meta">
            <span>${event.date} • ${event.time}</span>
            <span>${event.location}</span>
            <span>₹${event.price}</span>
            <span>${event.availableSeats} seats</span>
          </div>
          <div style="margin-top: 16px; display:flex; gap: 10px; flex-wrap: wrap;">
            <a class="btn" href="#event-${event.id}">Details</a>
            <a class="btn-secondary" href="#seat-${event.id}">Reserve</a>
          </div>
        </div>
      </article>
    `;
  },
  eventsPage(filtered) {
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Events</p>
            <h2>Find your next event</h2>
          </div>
          <a class="btn-secondary" href="#home">Back home</a>
        </div>
        <div class="panel" style="padding: 24px;">
          <div class="form-grid">
            <div>
              <label class="label">Search</label>
              <input class="field" type="text" value="${state.searchQuery}" placeholder="Search events" onchange="app.updateSearch(event)">
            </div>
            <div>
              <label class="label">Category</label>
              <select class="select" onchange="app.filterByCategory(this.value)">${['All','Music','Technology','Business','Cultural','Sports','Workshops','Technical','Wellness'].map(c => `<option value="${c}" ${state.selectedCategory===c?'selected':''}>${c}</option>`).join('')}</select>
            </div>
            <div>
              <label class="label">Location</label>
              <select class="select" onchange="app.filterByLocation(this.value)">${['All','Pune','Mumbai','Bengaluru','Delhi','Chennai','Goa','Kolkata','Hyderabad','Jaipur'].map(l => `<option value="${l}" ${state.selectedLocation===l?'selected':''}>${l}</option>`).join('')}</select>
            </div>
            <div>
              <label class="label">Price range</label>
              <input class="field" type="range" min="100" max="2000" step="100" value="${state.selectedPrice}" onchange="app.updatePrice(event)">
              <p style="margin-top: 8px;">Up to ₹${state.selectedPrice}</p>
            </div>
          </div>
          <div style="margin-top: 16px; display:flex; flex-wrap: wrap; align-items:center; gap:14px;">
            <span>${filtered.length} events found</span>
            <select class="select" onchange="app.updateSort(this.value)">${[{value:'date',label:'Date'},{value:'price-asc',label:'Price low to high'},{value:'price-desc',label:'Price high to low'},{value:'popularity',label:'Popularity'}].map(option => `<option value="${option.value}" ${state.selectedSort===option.value?'selected':''}>${option.label}</option>`).join('')}</select>
          </div>
        </div>
        <div class="event-grid" style="margin-top: 24px;">
          ${filtered.length ? filtered.map(this.eventCard).join('') : '<div class="panel">No events match your search and filters.</div>'}
        </div>
      </section>
    `;
  },
  eventDetail(event) {
    const ticketOptions = ticketTypes.map(ticket => `<button class="btn-secondary" style="min-width: 140px;" onclick="app.selectTicket('${ticket.label}')">${ticket.label} - ₹${Math.round(event.price*ticket.multiplier)}</button>`).join('');
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Event details</p>
            <h2>${event.title}</h2>
          </div>
          <a class="btn-secondary" href="#events">Back to events</a>
        </div>
        <div class="split-grid">
          <article class="page-card details-card">
            <img src="${event.image}" alt="${event.title}" style="border-radius: 24px; margin-bottom: 22px;">
            <div style="display:flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px;">
              <span class="badge muted">${event.category}</span>
              <span class="badge muted">${event.location}</span>
            </div>
            <p style="line-height:1.8; color: var(--text-muted);">${event.description}</p>
            <div style="margin-top: 24px; display:grid; gap: 18px;">
              <div class="summary-card"><div><span>Schedule</span><strong>${event.date} • ${event.time}</strong></div></div>
              <div class="summary-card"><div><span>Venue</span><strong>${event.location}</strong></div></div>
              <div class="summary-card"><div><span>Seats left</span><strong>${event.availableSeats}</strong></div></div>
            </div>
            <iframe src="https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed" style="width:100%; height:320px; border:none; margin-top:24px; border-radius:24px;"></iframe>
          </article>
          <aside class="details-card">
            <h3 style="margin-top:0;">Choose ticket</h3>
            <div style="display:grid; gap:14px; margin-top:16px;">${ticketOptions}</div>
            <div class="summary-card" style="margin-top:24px;">
              <div><span>Selected ticket</span><strong>${state.selectedTicket}</strong></div>
              <div><span>Price</span><strong>₹${Math.round(event.price * ticketTypes.find(t=>t.label===state.selectedTicket).multiplier)}</strong></div>
              <div><span>Total seats</span><strong>${event.availableSeats}</strong></div>
            </div>
            <button class="btn" style="width:100%; margin-top:24px;" onclick="app.reserveEvent(${event.id})">Reserve Seat</button>
          </aside>
        </div>
      </section>
    `;
  },
  seatSelection(event) {
    const seatList = this.buildSeatLayout(event.id).map(seat => `
      <button class="seat ${seat.status} ${seat.selected ? 'selected' : ''}" ${seat.status==='booked'?'disabled':''} onclick="app.toggleSeat('${seat.id}')">${seat.id}</button>
    `).join('');
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Seat booking</p>
            <h2>Select seats for ${event.title}</h2>
          </div>
          <a class="btn-secondary" href="#event-${event.id}">Back to event</a>
        </div>
        <div class="split-grid">
          <article class="details-card">
            <div style="margin-bottom:20px; display:flex; gap:14px; flex-wrap:wrap;"><span class="badge muted">${event.location}</span><span class="badge muted">${event.date}</span><span class="badge muted">${event.time}</span></div>
            <div class="seat-map">${seatList}</div>
            <div class="legend">
              <span><span class="dot available"></span> Available</span>
              <span><span class="dot reserved"></span> Reserved</span>
              <span><span class="dot booked"></span> Booked</span>
              <span><span class="dot" style="background: var(--primary);"></span> Selected</span>
            </div>
          </article>
          <aside class="summary-card">
            <div><span>Selected seats</span><strong>${state.selectedSeats.length || 0}</strong></div>
            <div><span>Ticket type</span><strong>${state.selectedTicket}</strong></div>
            <div><span>Price per ticket</span><strong>₹${Math.round(event.price * ticketTypes.find(t=>t.label===state.selectedTicket).multiplier)}</strong></div>
            <div class="total"><span>Total</span><strong>₹${state.selectedSeats.length * Math.round(event.price * ticketTypes.find(t=>t.label===state.selectedTicket).multiplier)}</strong></div>
            <button class="btn" style="width:100%;" onclick="app.gotoCheckout()" ${state.selectedSeats.length===0?'disabled':''}>Proceed to checkout</button>
          </aside>
        </div>
      </section>
    `;
  },
  checkout(event) {
    const ticketPrice = Math.round(event.price * ticketTypes.find(t=>t.label===state.selectedTicket).multiplier);
    const subtotal = ticketPrice * state.selectedSeats.length;
    const tax = Math.round(subtotal * 0.12);
    const total = subtotal + tax;
    const activeUser = helpers.getUser();
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Checkout</p>
            <h2>Complete your booking</h2>
          </div>
          <a class="btn-secondary" href="#seat-${event.id}">Back to seats</a>
        </div>
        <div class="split-grid">
          <article class="details-card">
            <h3>Booking details</h3>
            <div class="summary-card" style="margin-top:18px;">
              <div><span>Event</span><strong>${event.title}</strong></div>
              <div><span>Seats</span><strong>${state.selectedSeats.join(', ')}</strong></div>
              <div><span>Tickets</span><strong>${state.selectedSeats.length}</strong></div>
              <div><span>Payment</span><strong>${paymentMethods[0]}</strong></div>
            </div>
            <div style="margin-top:24px;"><p class="helper-text">Complete the payment and billing details to confirm your booking.</p></div>
          </article>
          <aside class="details-card">
            <form id="checkoutForm" onsubmit="app.completeBooking(event)">
              <div class="form-grid">
                <div>
                  <label class="label">Full Name</label>
                  <input class="field" id="fullName" value="${activeUser?.name||''}" required>
                </div>
                <div>
                  <label class="label">Email</label>
                  <input class="field" id="email" type="email" value="${activeUser?.email||''}" required>
                </div>
              </div>
              <div class="form-grid">
                <div>
                  <label class="label">Phone</label>
                  <input class="field" id="phone" placeholder="1234567890" required>
                </div>
                <div>
                  <label class="label">Payment method</label>
                  <select class="select" id="paymentMethod">${paymentMethods.map(method => `<option>${method}</option>`).join('')}</select>
                </div>
              </div>
              <label class="label">Address</label>
              <textarea class="textarea" id="address" rows="4" required></textarea>
              <div class="summary-card" style="margin-top: 22px;">
                <div><span>Subtotal</span><strong>₹${subtotal}</strong></div>
                <div><span>Taxes</span><strong>₹${tax}</strong></div>
                <div class="total"><span>Total amount</span><strong>₹${total}</strong></div>
              </div>
              <button class="btn" style="width:100%; margin-top:18px;">Confirm Booking</button>
            </form>
          </aside>
        </div>
      </section>
    `;
  },
  success(booking) {
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Success</p>
            <h2>Booking confirmed</h2>
          </div>
        </div>
        <div class="panel" style="padding: 36px; text-align:center;">
          <div style="display:inline-flex; width:96px; height:96px; border-radius:50%; background: rgba(22,163,74,0.12); align-items:center; justify-content:center; margin-bottom:24px;">
            <span style="font-size:2.2rem; color:#16a34a;">✓</span>
          </div>
          <h3>Your ticket has been booked successfully!</h3>
          <p style="color: var(--text-muted); margin:16px auto; max-width:560px;">Booking ID <strong>${booking.id}</strong></p>
          <div class="summary-card" style="margin:0 auto; max-width:520px;">
            <div><span>Event</span><strong>${booking.event.title}</strong></div>
            <div><span>Seats</span><strong>${booking.seats.join(', ')}</strong></div>
            <div><span>Amount</span><strong>₹${booking.amount}</strong></div>
            <div><span>Status</span><strong>Confirmed</strong></div>
          </div>
          <div style="margin-top:24px; display:flex; justify-content:center; gap:14px; flex-wrap: wrap;">
            <button class="btn" onclick="window.print()">Print Ticket</button>
            <a class="btn-secondary" href="#dashboard">View Dashboard</a>
          </div>
        </div>
      </section>
    `;
  },
  dashboard(user, bookings) {
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Dashboard</p>
            <h2>Welcome back, ${user.name}</h2>
          </div>
        </div>
        <div class="stats-grid">
          <div class="widget-card"><p>Total bookings</p><h3>${bookings.length}</h3></div>
          <div class="widget-card"><p>Wishlist</p><h3>${user.wishlist?.length||0}</h3></div>
          <div class="widget-card"><p>Upcoming events</p><h3>${bookings.filter(b=>b.status==='Confirmed').length}</h3></div>
          <div class="widget-card"><p>Total spent</p><h3>₹${bookings.reduce((sum,b)=>sum+b.amount,0)}</h3></div>
        </div>
        <div class="split-grid" style="margin-top: 24px;">
          <article class="details-card">
            <h3>Profile</h3>
            <div class="summary-card" style="margin-top:18px;">
              <div><span>Name</span><strong>${user.name}</strong></div>
              <div><span>Email</span><strong>${user.email}</strong></div>
            </div>
          </article>
          <article class="details-card">
            <h3>Notifications</h3>
            <div style="display:flex; flex-direction:column; gap:12px; margin-top:18px;">
              <div class="notification-card"><p>Your last booking was confirmed.</p></div>
              <div class="notification-card"><p>New events have been added for you.</p></div>
            </div>
          </article>
        </div>
        <section style="margin-top:32px;">
          <div class="section-header"><div><p class="badge brand">My Bookings</p><h2>Recent activity</h2></div></div>
          <div class="event-grid">${bookings.length ? bookings.map(b => `<article class="booking-card"><h3>${b.event.title}</h3><p>${b.event.date} • ${b.seats.join(', ')}</p><div style="margin-top:14px; display:flex; justify-content:space-between; align-items:center;"><span>₹${b.amount}</span><span class="badge ${b.status==='Confirmed'?'brand':'muted'}">${b.status}</span></div></article>`).join('') : '<div class="panel">No bookings yet. Explore events to start booking.</div>'}</div>
        </section>
      </section>
    `;
  },
  history(bookings) {
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">Bookings</p>
            <h2>Booking history</h2>
          </div>
          <a class="btn-secondary" href="#dashboard">Back to dashboard</a>
        </div>
        <div class="panel table-card">
          <table>
            <thead><tr><th>Booking ID</th><th>Event</th><th>Date</th><th>Seats</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>${bookings.length ? bookings.map(b => `<tr><td>${b.id}</td><td>${b.event.title}</td><td>${b.event.date}</td><td>${b.seats.join(', ')}</td><td>₹${b.amount}</td><td>${b.status}</td></tr>`).join('') : '<tr><td colspan="6" style="text-align:center; padding:24px;">No bookings found.</td></tr>'}</tbody>
          </table>
        </div>
      </section>
    `;
  },
  authForm(type='login', message='') {
    const title = type === 'register' ? 'Create account' : type === 'forgot' ? 'Reset password' : 'Welcome back';
    const description = type === 'register' ? 'Create your account to manage bookings and wishlist.' : type === 'forgot' ? 'Enter your email to recover your password.' : 'Login to access your bookings and dashboard.';
    const button = type === 'register' ? 'Register' : type === 'forgot' ? 'Send reset link' : 'Login';
    return `
      <section class="section container">
        <div class="section-header">
          <div>
            <p class="badge brand">${title}</p>
            <h2>${title}</h2>
          </div>
          <a class="btn-secondary" href="#home">Back to home</a>
        </div>
        <div class="auth-panel panel">
          <h3>${title}</h3>
          <p style="color: var(--text-muted);">${description}</p>
          ${message ? `<div style="margin:16px 0; color: #dc2626;">${message}</div>` : ''}
          <form onsubmit="app.handleAuth(event, '${type}')">
            ${type === 'register' ? `<label class="label">Full Name</label><input class="field" id="authName" required>` : ''}
            <label class="label">Email</label>
            <input class="field" id="authEmail" type="email" required>
            ${type !== 'forgot' ? `<label class="label">Password</label><input class="field" id="authPassword" type="password" required>` : ''}
            <button class="btn" style="margin-top:20px;" type="submit">${button}</button>
          </form>
          ${type === 'login' ? '<p style="margin-top:16px;">Forgot password? <a href="#forgot">Reset here</a></p>' : ''}
          ${type !== 'register' ? '<p style="margin-top:12px;">New here? <a href="#register">Create account</a></p>' : '<p style="margin-top:12px;">Already have an account? <a href="#login">Login</a></p>'}
        </div>
      </section>
    `;
  },
  adminPage(isAdmin) {
    if (!isAdmin) {
      return `
        <section class="section container">
          <div class="section-header"><div><p class="badge brand">Admin</p><h2>Admin login</h2></div></div>
          <div class="auth-panel panel">
            <form onsubmit="app.handleAdminLogin(event)">
              <label class="label">Email</label><input class="field" id="adminEmail" type="email" required>
              <label class="label">Password</label><input class="field" id="adminPassword" type="password" required>
              <button class="btn" style="margin-top:20px;">Sign in</button>
            </form>
          </div>
        </section>
      `;
    }
    const totalRevenue = state.bookings.reduce((sum,b)=>sum+b.amount,0);
    const users = helpers.getUsers();
    return `
      <section class="section container">
        <div class="section-header"><div><p class="badge brand">Admin Dashboard</p><h2>Management center</h2></div></div>
        <div class="stats-grid">
          <div class="widget-card"><p>Total events</p><h3>${state.events.length}</h3></div>
          <div class="widget-card"><p>Total users</p><h3>${users.length}</h3></div>
          <div class="widget-card"><p>Total revenue</p><h3>₹${totalRevenue}</h3></div>
          <div class="widget-card"><p>Total bookings</p><h3>${state.bookings.length}</h3></div>
        </div>
        <div class="split-grid" style="margin-top:24px;">
          <article class="admin-box">
            <h3>Manage Events</h3>
            <button class="btn" style="width:100%; margin-top:16px;" onclick="app.openAddEvent()">Add event</button>
            <div style="margin-top:18px; display:grid; gap:12px;">
              ${state.events.map(event => `<div style="border:1px solid var(--border); border-radius:18px; padding:16px;"><strong>${event.title}</strong><p style="margin:8px 0 0;color:var(--text-muted)">${event.location} • ₹${event.price}</p><div style="margin-top:12px; display:flex; gap:10px;"><button class="btn-secondary" onclick="app.openEditEvent(${event.id})">Edit</button><button class="btn-secondary" onclick="app.deleteEvent(${event.id})">Delete</button></div></div>`).join('')}
            </div>
          </article>
          <article class="admin-box">
            <h3>Manage Bookings</h3>
            <div style="margin-top:18px; display:grid; gap:12px;">
              ${state.bookings.map(b => `<div style="border:1px solid var(--border); border-radius:18px; padding:16px;"><strong>${b.event.title}</strong><p style="margin:8px 0 0;color:var(--text-muted)">₹${b.amount} • ${b.status}</p></div>`).join('')}
            </div>
          </article>
        </div>
        <div class="admin-box" style="margin-top:24px;">
          <h3>Manage Users</h3>
          <div style="margin-top:18px; display:grid; gap:12px;">
            ${users.map(user => `<div style="border:1px solid var(--border); border-radius:18px; padding:16px;"><strong>${user.name}</strong><p style="margin:8px 0 0;color:var(--text-muted)">${user.email}</p></div>`).join('')}
          </div>
        </div>
        <div class="admin-box" style="margin-top:24px;">
          <h3>Analytics</h3>
          <canvas id="adminChart" style="max-height:320px;"></canvas>
        </div>
      </section>
    `;
  },
  addEventModal() {
    return `
      <div class="modal-overlay" id="eventModal" style="position:fixed;inset:0;background:rgba(15,23,42,0.42);display:flex;align-items:center;justify-content:center;z-index:3000;">
        <div class="panel" style="width:min(620px,calc(100%-32px)); position:relative;">
          <button onclick="app.closeModal()" style="position:absolute;top:18px;right:18px;border:none;background:none;font-size:1.25rem;cursor:pointer;">×</button>
          <h3>${state.modalAction==='edit'?'Edit event':'Add event'}</h3>
          <form onsubmit="app.saveEvent(event)">
            <div class="form-grid" style="margin-top:18px;">
              <div><label class="label">Title</label><input class="field" id="eventTitle" value="${state.modalData?.title||''}" required></div>
              <div><label class="label">Category</label><input class="field" id="eventCategory" value="${state.modalData?.category||''}" required></div>
            </div>
            <div class="form-grid" style="margin-top:18px;">
              <div><label class="label">Location</label><input class="field" id="eventLocation" value="${state.modalData?.location||''}" required></div>
              <div><label class="label">Date</label><input class="field" id="eventDate" type="date" value="${state.modalData?.date||''}" required></div>
            </div>
            <div class="form-grid" style="margin-top:18px;">
              <div><label class="label">Time</label><input class="field" id="eventTime" type="time" value="${state.modalData?.time||''}" required></div>
              <div><label class="label">Price</label><input class="field" id="eventPrice" type="number" value="${state.modalData?.price||''}" required></div>
            </div>
            <label class="label" style="margin-top:18px;">Image URL</label>
            <input class="field" id="eventImage" value="${state.modalData?.image||''}" required>
            <label class="label" style="margin-top:18px;">Description</label>
            <textarea class="textarea" id="eventDescription" rows="4" required>${state.modalData?.description||''}</textarea>
            <button class="btn" style="margin-top:22px; width:100%;">Save event</button>
          </form>
        </div>
      </div>
    `;
  },
};

const app = {
  init() {
    if (!helpers.getUsers()) helpers.setUsers(defaultUsers);
    if (!helpers.getEvents()) helpers.setEvents(defaultEvents);
    state.events = helpers.getEvents();
    state.bookings = helpers.getBookings();
    this.applyTheme();
    window.addEventListener('hashchange', () => this.route());
    this.route();
  },
  route() {
    const hash = window.location.hash.slice(1) || 'home';
    const user = helpers.getUser();
    let html = render.nav();

    if (hash.startsWith('home')) {
      html += render.hero() + render.featured(state.events) + render.categories() + render.trending(state.events);
    } else if (hash === 'events') {
      html += render.eventsPage(this.getFilteredEvents());
    } else if (hash.startsWith('event-')) {
      const id = Number(hash.split('-')[1]);
      const event = state.events.find(e=>e.id===id);
      if (!event) return this.navigate('events');
      state.selectedEventId = id;
      html += render.eventDetail(event);
    } else if (hash.startsWith('seat-')) {
      const id = Number(hash.split('-')[1]);
      const event = state.events.find(e=>e.id===id);
      if (!event) return this.navigate('events');
      state.selectedEventId = id;
      html += render.seatSelection(event);
    } else if (hash === 'checkout') {
      const cart = helpers.getCart();
      if (!cart) return this.navigate('events');
      const event = state.events.find(e=>e.id===cart.eventId);
      if (!event) return this.navigate('events');
      html += render.checkout(event);
    } else if (hash === 'success') {
      const booking = helpers.getLastBooking();
      if (!booking) return this.navigate('home');
      html += render.success(booking);
    } else if (hash === 'dashboard') {
      if (!user) return this.navigate('login');
      const bookings = state.bookings.filter(b=>b.userId===user.id);
      html += render.dashboard(user, bookings);
    } else if (hash === 'history') {
      if (!user) return this.navigate('login');
      const bookings = state.bookings.filter(b=>b.userId===user.id);
      html += render.history(bookings);
    } else if (hash === 'login' || hash === 'register' || hash === 'forgot') {
      html += render.authForm(hash);
    } else if (hash === 'admin') {
      html += render.adminPage(helpers.getAdminSession());
    } else {
      html += render.hero() + render.featured(state.events);
    }

    html += render.footer();
    dom.app.innerHTML = html;
    this.bindEvents();
    this.renderModal();
    this.renderChart();
  },
  bindEvents() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.onclick = () => this.toggleTheme();
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) logoutButton.onclick = () => this.logout();
  },
  renderModal() {
    if (state.showModal) {
      dom.app.insertAdjacentHTML('beforeend', render.addEventModal());
    }
  },
  renderChart() {
    if (window.location.hash === '#admin' && helpers.getAdminSession()) {
      const ctx = document.getElementById('adminChart');
      if (ctx && typeof Chart !== 'undefined') {
        const confirmed = state.bookings.filter(b=>b.status==='Confirmed').length;
        new Chart(ctx, { type: 'doughnut', data: { labels: ['Confirmed','Pending','Cancelled'], datasets:[{data:[confirmed, state.bookings.length-confirmed, 0], backgroundColor:['#2563eb','#f59e0b','#dc2626']}]}, options:{responsive:true}});
      }
    }
  },
  updateSearch(event) {
    state.searchQuery = event.target.value;
    this.route();
  },
  filterByCategory(category) {
    state.selectedCategory = category;
    this.route();
  },
  filterByLocation(location) {
    state.selectedLocation = location;
    this.route();
  },
  updatePrice(event) {
    state.selectedPrice = Number(event.target.value);
    this.route();
  },
  updateSort(value) {
    state.selectedSort = value;
    this.route();
  },
  getFilteredEvents() {
    return state.events.filter(event => {
      const matchSearch = event.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || event.category.toLowerCase().includes(state.searchQuery.toLowerCase()) || event.location.toLowerCase().includes(state.searchQuery.toLowerCase());
      const matchCategory = state.selectedCategory === 'All' || event.category === state.selectedCategory;
      const matchLocation = state.selectedLocation === 'All' || event.location === state.selectedLocation;
      const matchDate = !state.selectedDate || event.date === state.selectedDate;
      const matchPrice = event.price <= state.selectedPrice;
      return matchSearch && matchCategory && matchLocation && matchDate && matchPrice;
    }).sort((a,b) => {
      if (state.selectedSort === 'price-asc') return a.price - b.price;
      if (state.selectedSort === 'price-desc') return b.price - a.price;
      if (state.selectedSort === 'popularity') return b.popularity - a.popularity;
      return new Date(a.date) - new Date(b.date);
    });
  },
  selectTicket(ticket) {
    state.selectedTicket = ticket;
    this.route();
  },
  reserveEvent(eventId) {
    if (!helpers.getUser()) return this.navigate('login');
    helpers.setCart({ eventId, ticketType: state.selectedTicket, seats: [] });
    state.selectedSeats = [];
    this.navigate(`seat-${eventId}`);
  },
  buildSeatLayout(eventId) {
    const reserved = ['A4','A5','B3','C6','D2','E8'];
    const booked = ['A1','B1','C1','D1','E1'];
    const cart = helpers.getCart();
    return Array.from({ length: 40 }, (_, index) => {
      const row = String.fromCharCode(65 + Math.floor(index / 8));
      const seat = `${row}${(index % 8) + 1}`;
      return {
        id: seat,
        status: booked.includes(seat)?'booked':reserved.includes(seat)?'reserved':'available',
        selected: cart?.seats?.includes(seat),
      };
    });
  },
  toggleSeat(seatId) {
    const cart = helpers.getCart();
    if (!cart) return this.navigate('events');
    const current = cart.seats || [];
    const index = current.indexOf(seatId);
    if (index > -1) current.splice(index,1); else current.push(seatId);
    cart.seats = current;
    helpers.setCart(cart);
    state.selectedSeats = current;
    this.route();
  },
  gotoCheckout() {
    const cart = helpers.getCart();
    if (!cart || !cart.seats.length) return this.showToast('Select at least one seat first', 'error');
    this.navigate('checkout');
  },
  completeBooking(event) {
    event.preventDefault();
    const form = document.getElementById('checkoutForm');
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (!fullName || !email || !phone || !address) {
      return this.showToast('Please complete all fields', 'error');
    }
    if (phone.length < 10) return this.showToast('Enter a valid phone number', 'error');
    const cart = helpers.getCart();
    const eventData = state.events.find(e=>e.id===cart.eventId);
    const ticket = ticketTypes.find(t=>t.label===cart.ticketType);
    const subtotal = Math.round(eventData.price * ticket.multiplier) * cart.seats.length;
    const tax = Math.round(subtotal * 0.12);
    const booking = {
      id: `BK-${Date.now()}`,
      userId: helpers.getUser().id,
      event: eventData,
      seats: cart.seats,
      payment: paymentMethod,
      amount: subtotal + tax,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      customer: { fullName, email, phone, address },
    };
    state.bookings.push(booking);
    helpers.setBookings(state.bookings);
    const users = helpers.getUsers();
    const currentUser = helpers.getUser();
    const updatedUser = { ...currentUser, bookings: [...(currentUser.bookings || []), booking.id] };
    const updatedUsers = users.map(u => u.id===updatedUser.id ? updatedUser : u);
    helpers.setUsers(updatedUsers);
    helpers.setUser(updatedUser);
    helpers.setLastBooking(booking);
    helpers.clearCart();
    state.selectedSeats = [];
    this.navigate('success');
  },
  handleAuth(event, type) {
    event.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword')?.value.trim();
    const name = document.getElementById('authName')?.value.trim();
    const users = helpers.getUsers();
    if (type === 'register') {
      if (users.some(u=>u.email===email)) return this.renderAuth('register', 'Email already registered');
      const newUser = { id:`u-${Date.now()}`, name, email, password, wishlist: [], bookings: [] };
      helpers.setUsers([...users, newUser]);
      helpers.setUser(newUser);
      this.showToast('Account created successfully', 'success');
      this.navigate('dashboard');
    } else if (type === 'login') {
      const user = users.find(u=>u.email===email && u.password===password);
      if (!user) return this.renderAuth('login', 'Invalid email or password');
      helpers.setUser(user);
      this.showToast('Logged in successfully', 'success');
      this.navigate('dashboard');
    } else {
      const user = users.find(u=>u.email===email);
      if (!user) return this.renderAuth('forgot', 'Email not registered');
      this.showToast('Password recovery email sent', 'success');
      this.navigate('login');
    }
  },
  renderAuth(page, message) {
    window.location.hash = page;
    setTimeout(() => this.route(), 0);
    if (message) this.showToast(message, 'error');
  },
  handleAdminLogin(event) {
    event.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value.trim();
    if (email === adminCredentials.email && password === adminCredentials.password) {
      helpers.setAdminSession(true);
      this.showToast('Admin logged in', 'success');
      this.route();
      return;
    }
    this.showToast('Invalid admin credentials', 'error');
  },
  logout() {
    helpers.setUser(null);
    this.showToast('Logged out successfully', 'success');
    this.route();
  },
  navigate(hash) {
    window.location.hash = hash;
  },
  showToast(message, type='success') {
    dom.toast.textContent = message;
    dom.toast.className = `toast ${type}`;
    dom.toast.classList.remove('hidden');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => dom.toast.classList.add('hidden'), 3200);
  },
  applyTheme() {
    document.body.dataset.theme = state.theme;
    if (state.theme === 'dark') {
      document.documentElement.style.setProperty('--bg', '#0f172a');
      document.documentElement.style.setProperty('--surface', '#111827');
      document.documentElement.style.setProperty('--surface-soft', '#1f2937');
      document.documentElement.style.setProperty('--text', '#f8fafc');
      document.documentElement.style.setProperty('--text-muted', '#cbd5e1');
      document.documentElement.style.setProperty('--border', '#334155');
    } else {
      document.documentElement.style.setProperty('--bg', '#f8fafc');
      document.documentElement.style.setProperty('--surface', '#ffffff');
      document.documentElement.style.setProperty('--surface-soft', '#f1f5f9');
      document.documentElement.style.setProperty('--text', '#0f172a');
      document.documentElement.style.setProperty('--text-muted', '#475569');
      document.documentElement.style.setProperty('--border', '#e2e8f0');
    }
    this.route();
  },
  toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    helpers.setTheme(state.theme);
    this.applyTheme();
  },
  openAddEvent() {
    state.modalAction = 'add';
    state.modalData = null;
    state.showModal = true;
    this.route();
  },
  openEditEvent(id) {
    state.modalAction = 'edit';
    state.modalData = state.events.find(e=>e.id===id);
    state.showModal = true;
    this.route();
  },
  closeModal() {
    state.showModal = false;
    state.modalData = null;
    this.route();
  },
  saveEvent(event) {
    event.preventDefault();
    const title = document.getElementById('eventTitle').value.trim();
    const category = document.getElementById('eventCategory').value.trim();
    const location = document.getElementById('eventLocation').value.trim();
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const price = Number(document.getElementById('eventPrice').value);
    const image = document.getElementById('eventImage').value.trim();
    const description = document.getElementById('eventDescription').value.trim();
    if (!title || !category || !location || !date || !time || !price || !image || !description) {
      return this.showToast('Fill in all event details', 'error');
    }
    if (state.modalAction === 'edit' && state.modalData) {
      state.events = state.events.map(e => e.id===state.modalData.id ? { ...e, title, category, location, date, time, price, image, description } : e);
      this.showToast('Event updated', 'success');
    } else {
      const newEvent = { id: Date.now(), title, category, location, date, time, price, image, description, availableSeats: 120, popularity: 80 };
      state.events.push(newEvent);
      this.showToast('Event added', 'success');
    }
    helpers.setEvents(state.events);
    state.showModal = false;
    this.route();
  },
  deleteEvent(id) {
    state.events = state.events.filter(e=>e.id!==id);
    helpers.setEvents(state.events);
    this.showToast('Event deleted', 'success');
    this.route();
  },
};

window.app = app;
window.onload = () => app.init();