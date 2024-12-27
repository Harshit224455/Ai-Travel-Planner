// Sample activities data with categories and preferences
const activities = [
    { name: 'Visit Eiffel Tower', category: 'sightseeing', duration: 2, popularity: 5 },
    { name: 'Louvre Museum', category: 'museum', duration: 3, popularity: 4 },
    { name: 'Seine River Cruise', category: 'leisure', duration: 1, popularity: 4 },
    { name: 'Notre Dame Cathedral', category: 'sightseeing', duration: 2, popularity: 4 },
    { name: 'Montmartre', category: 'exploration', duration: 3, popularity: 3 },
    { name: 'Versailles Palace', category: 'historic', duration: 4, popularity: 5 },
    { name: 'Disneyland Paris', category: 'entertainment', duration: 8, popularity: 5 },
  ];
  
  // Function to get custom recommendations
  const getCustomRecommendations = (preferences) => {
    return activities
      .filter(activity => preferences.includes(activity.category))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 5); // Limiting to top 5 recommendations
  };
  
  module.exports = { getCustomRecommendations };
  