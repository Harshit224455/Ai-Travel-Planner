const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getPersonalizedItinerary } = require('./itinerary');
const { optimizeBudget } = require('./budgetOptimization');
const { scheduleActivities } = require('./timeManagement');
const { getCustomRecommendations } = require('./customRecommendations');
const { adjustItinerary } = require('./realTimeAdjustments');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/plan', async (req, res) => {
  const { budget, duration, preferences, startDate, endDate, currentTime, additionalPreferences } = req.body;
  try {
    const itinerary = await getPersonalizedItinerary(budget, duration);
    const budgetAllocation = optimizeBudget(budget, preferences);
    const customRecommendations = getCustomRecommendations(preferences.categories);
    let schedule = scheduleActivities(startDate, endDate, customRecommendations);

    if (currentTime) {
      schedule = adjustItinerary(schedule, currentTime, additionalPreferences);
    }

    res.json({ itinerary, budgetAllocation, customRecommendations, schedule });
  } catch (error) {
    console.error("Error generating plan:", error);
    res.status(500).send('Error generating itinerary, budget allocation, custom recommendations, and schedule');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
