// Utility function to load the training data
// const tf = require('@tensorflow/tfjs-node');



function loadTrainingData(csvFilePath, numClasses) {
    return new Promise((resolve, reject) => {
      // Load the CSV file and convert it to JSON
      csv()
        .fromFile(csvFilePath)
        .then(json => {
          // Convert the JSON data into TensorFlow tensors
          const xTrain = tf.tensor(json.map(row => [row.feature1, row.feature2, row.feature3]));
          const yTrain = tf.oneHot(tf.tensor1d(json.map(row => row.label), 'int32'), numClasses);
  
          // Return the tensors
          resolve({ xTrain, yTrain });
        })
        .catch(error => reject(error));
    });
}

function converToUpperCase(palabra){
  return  palabra.toUpperCase()
}



  module.exports = {loadTrainingData, converToUpperCase};