const { DateTime } = require('luxon');

// Sample activities data
const activities = [
  { name: 'Visit Eiffel Tower', duration: 2, priority: 1 },
  { name: 'Louvre Museum', duration: 3, priority: 2 },
  { name: 'Seine River Cruise', duration: 1, priority: 3 },
  { name: 'Notre Dame Cathedral', duration: 2, priority: 2 },
  { name: 'Montmartre', duration: 3, priority: 1 },
];

// Function to schedule activities
const scheduleActivities = (startDate, endDate, activities) => {
  const schedule = [];
  let currentDate = DateTime.fromISO(startDate);
  const endDateTime = DateTime.fromISO(endDate);

  // Sort activities by priority
  activities.sort((a, b) => a.priority - b.priority);

  // Schedule activities within the given dates
  activities.forEach(activity => {
    if (currentDate.plus({ hours: activity.duration }).toISO() <= endDateTime.toISO()) {
      schedule.push({
        activity: activity.name,
        start: currentDate.toISO(),
        end: currentDate.plus({ hours: activity.duration }).toISO()
      });
      currentDate = currentDate.plus({ hours: activity.duration });
    }
  });

  return schedule;
};

module.exports = { scheduleActivities };
