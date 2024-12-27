const tf = require('@tensorflow/tfjs');

// Sample travel data
const travelData = [
  { destination: 'Paris', budget: 1000, duration: 5 },
  { destination: 'Tokyo', budget: 2000, duration: 7 },
  { destination: 'New York', budget: 1500, duration: 4 },
  { destination: 'Sydney', budget: 2500, duration: 10 },
  { destination: 'Barcelona', budget: 1200, duration: 6 },
];

// Function to create and train the model
const createAndTrainModel = async () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 10, activation: 'relu', inputShape: [2] }));
  model.add(tf.layers.dense({ units: 5, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1 }));
  model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

  const inputs = tf.tensor2d(travelData.map(item => [item.budget, item.duration]));
  const outputs = tf.tensor2d(travelData.map(item => [parseFloat(item.destination)]));

  await model.fit(inputs, outputs, { epochs: 100 });
  return model;
};

// Function to get personalized itinerary
const getPersonalizedItinerary = async (budget, duration) => {
  const model = await createAndTrainModel();
  const input = tf.tensor2d([[parseFloat(budget), parseFloat(duration)]]);
  const prediction = model.predict(input);
  const closestDestination = travelData[prediction.argMax().dataSync()[0]];
  return closestDestination;
};

module.exports = { getPersonalizedItinerary };
