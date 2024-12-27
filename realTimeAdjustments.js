const { DateTime } = require('luxon');

// Function to dynamically adjust the itinerary
const adjustItinerary = (currentItinerary, currentTime, additionalPreferences = {}) => {
  const adjustedItinerary = [];
  const currentDateTime = DateTime.fromISO(currentTime);

  // Loop through the current itinerary and adjust based on current time and preferences
  currentItinerary.forEach(event => {
    const eventStart = DateTime.fromISO(event.start);
    const eventEnd = DateTime.fromISO(event.end);

    // Skip past events
    if (eventEnd > currentDateTime) {
      // Apply additional preferences if any
      if (Object.keys(additionalPreferences).length > 0) {
        if (additionalPreferences[event.activity]) {
          event.duration += additionalPreferences[event.activity];
          event.end = eventStart.plus({ hours: event.duration }).toISO();
        }
      }
      adjustedItinerary.push(event);
    }
  });

  return adjustedItinerary;
};

module.exports = { adjustItinerary };
