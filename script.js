document.getElementById('travelForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const budget = document.getElementById('budget').value;
    const duration = document.getElementById('duration').value;
    const preferences = document.getElementById('preferences').value.split(',').map(pref => pref.trim());
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const response = await fetch('http://localhost:3000/plan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            budget, 
            duration, 
            preferences: { categories: preferences }, 
            startDate, 
            endDate 
        }),
    });

    const result = await response.json();

    document.getElementById('results').innerHTML = `
        <h2>Your Trip Plan</h2>
        <h3>Itinerary:</h3>
        <p><strong>Destination:</strong> ${result.itinerary.destination}</p>
        <p><strong>Budget:</strong> ${result.itinerary.budget}</p>
        <p><strong>Duration:</strong> ${result.itinerary.duration} days</p>

        <h3>Budget Allocation:</h3>
        <ul>
            <li><strong>Accommodation:</strong> ${result.budgetAllocation.accommodation}</li>
            <li><strong>Food:</strong> ${result.budgetAllocation.food}</li>
            <li><strong>Transportation:</strong> ${result.budgetAllocation.transportation}</li>
            <li><strong>Activities:</strong> ${result.budgetAllocation.activities}</li>
            <li><strong>Miscellaneous:</strong> ${result.budgetAllocation.miscellaneous}</li>
        </ul>

        <h3>Custom Recommendations:</h3>
        <ul>
            ${result.customRecommendations.map(activity => `<li>${activity.name} (${activity.category}, ${activity.duration} hours)</li>`).join('')}
        </ul>

        <h3>Schedule:</h3>
        <ul>
            ${result.schedule.map(event => `<li>${event.activity} from ${new Date(event.start).toLocaleString()} to ${new Date(event.end).toLocaleString()}</li>`).join('')}
        </ul>
    `;
});
