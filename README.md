# AI Travel Planner

AI Travel Planner is a platform that uses artificial intelligence to create personalized travel itineraries based on user preferences, budget, and time. This application is built with Node.js for the backend and TensorFlow.js for machine learning models.

## Features

- **Personalized Itineraries:** Create customized travel plans based on user inputs.
- **Budget Optimization:** Allocate expenses efficiently to various categories.
- **Custom Recommendations:** Suggest activities based on user preferences.
- **Time Management:** Maximize trip productivity with well-organized schedules.
- **Real-Time Adjustments:** Adapt plans dynamically based on real-time data.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ai-travel-planner.git
    cd ai-travel-planner
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the Node.js server:
    ```bash
    node app.js
    ```

4. Serve the frontend:
    You can use a simple web server to serve your HTML files. If you have Python installed, you can run the following command:
    ```bash
    python -m http.server
    ```

    This will serve your files at `http://localhost:8000`.

## Usage

1. Open your browser and navigate to `http://localhost:8000`.

2. Fill out the form with your travel preferences, including budget, duration, preferences, start date, and end date.

3. Click the "Plan My Trip" button to generate your personalized travel plan.

## Folder Structure

- `app.js`: Main backend application file.
- `itinerary.js`: Contains functions for creating personalized itineraries.
- `budgetOptimization.js`: Handles budget optimization.
- `timeManagement.js`: Manages the scheduling of activities.
- `customRecommendations.js`: Provides custom activity recommendations.
- `realTimeAdjustments.js`: Dynamically adjusts the itinerary based on real-time data.
- `index.html`: Main HTML file for the frontend.
- `style.css`: Stylesheet for the frontend.
- `script.js`: JavaScript file for handling frontend logic.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
