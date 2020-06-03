const brain = require('brain.js');
const data = require('./data.json');


const network =  new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 2000 // the more iterations, more accurate
});

const output = network.run('user experience');

console.log(`Category : ${output}`);