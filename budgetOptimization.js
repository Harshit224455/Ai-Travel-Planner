const optimizeBudget = (userBudget, userPreferences = {}) => {
  const defaultPreferences = {
    accommodation: 0.3,
    food: 0.2,
    transportation: 0.2,
    activities: 0.2,
    miscellaneous: 0.1,
  };

  const preferences = userPreferences.categories ? { ...defaultPreferences, ...userPreferences.categories } : defaultPreferences;

  const totalPreference = Object.values(preferences).reduce((sum, value) => sum + value, 0);

  // Normalize preferences if needed
  if (totalPreference !== 1) {
    for (let key in preferences) {
      preferences[key] /= totalPreference;
    }
  }

  const allocation = {};
  for (let category in preferences) {
    allocation[category] = preferences[category] * userBudget;
  }

  return allocation;
};

module.exports = { optimizeBudget };
