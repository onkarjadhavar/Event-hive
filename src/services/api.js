import eventsData from '../data/events.json';

export const fetchEvents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData.events);
    }, 350);
  });
};

export const findEventById = async (id) => {
  const events = await fetchEvents();
  return events.find((event) => event.id.toString() === id.toString());
};
