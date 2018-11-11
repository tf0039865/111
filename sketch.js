// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ML5 Example
KNN_Image
KNN Image Classifier example with p5.js
=== */

let knn;
let video;
const

function setup() {
  noCanvas();
  video = createCapture(VIDEO).parent('videoContainer');
  // Create a KNN Image Classifier
  knn = new ml5.KNNImageClassifier(8, 1, modelLoaded, video.elt);
  createButtons();
}

function createButtons() {
  // Save and Load buttons
  save = select('#save');
  save.mousePressed(function() {
    knn.save('test');
  });

 load = select('#load');
 load.mousePressed(function() {
    knn.load('test.json', updateExampleCounts);
  });


  // Train buttons
  buttonA = select('#buttonA');
  buttonA.mousePressed(function() {
    train(1);
  });

  buttonB = select('#buttonB');
  buttonB.mousePressed(function() {
    train(2);
  });

  buttonC = select('#buttonC');
  buttonC.mousePressed(function() {
    train(3);
  });
  buttonD = select('#buttonD');
  buttonD.mousePressed(function() {
    train(4);
  });
  buttonE = select('#buttonE');
  buttonE.mousePressed(function() {
    train(5);
  });
  buttonF = select('#buttonF');
  buttonF.mousePressed(function() {
    train(6);
  });
  buttonG = select('#buttonG');
  buttonG.mousePressed(function() {
    train(7);
  });buttonH = select('#buttonH');
  buttonH.mousePressed(function() {
    train(8);
  });
  
  // Reset buttons
  resetBtnA = select('#resetA');
  resetBtnA.mousePressed(function() {
    clearClass(1);
    updateExampleCounts();
  });

  resetBtnB = select('#resetB');
  resetBtnB.mousePressed(function() {
    clearClass(2);
    updateExampleCounts();
  });

  resetBtnC = select('#resetC');
  resetBtnC.mousePressed(function() {
    clearClass(3);
    updateExampleCounts();
  });
  resetBtnD = select('#resetD');
  resetBtnD.mousePressed(function() {
    clearClass(4);
    updateExampleCounts();
  });
  resetBtnE = select('#resetE');
  resetBtnE.mousePressed(function() {
    clearClass(5);
    updateExampleCounts();
  });
  resetBtnF = select('#resetF');
  resetBtnF.mousePressed(function() {
    clearClass(6);
    updateExampleCounts();
  });
    resetBtnG = select('#resetG');
    resetBtnG.mousePressed(function() {
      clearClass(7);
      updateExampleCounts();
    });
  resetBtnH = select('#resetH');
  resetBtnH.mousePressed(function() {
    clearClass(8);
    updateExampleCounts();
  });
  // Predict Button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(predict);
}

// A function to be called when the model has been loaded
function modelLoaded() {
  select('#loading').html('Model loaded!');
}

// Train the Classifier on a frame from the video.
function train(category) {
  let msg;
  if (category == 1) {
    msg = 'A';
  } else if (category == 2) {
    msg = 'B';
  } else if (category == 3) {
    msg = 'C';
  }else if (category == 4) {
    msg = 'D';
  }else if (category == 5) {
    msg = 'E';
  }else if (category == 6) {
    msg = 'F';
  }else if (category == 7) {
    msg = 'G';
  }else if (category == 8) {
    msg = 'H';
  }
  select('#training').html(msg);
  knn.addImageFromVideo(category);
  updateExampleCounts();
}

// Predict the current frame.
function predict() {
  knn.predictFromVideo(gotResults);
}

// Show the results
function gotResults(results) {
  let msg;

  if (results.classIndex == 1) {
    msg = 'A';
  } else if (results.classIndex == 2) {
    msg = 'B';
  } else if (results.classIndex == 3) {
    msg = 'C';
  }else if (results.classIndex == 4) {
    msg = 'D';
  }else if (results.classIndex == 5) {
    msg = 'E';
  }else if (results.classIndex == 6) {
    msg = 'F';
  }else if (results.classIndex == 7) {
    msg = 'G';
  }else if (results.classIndex == 8) {
    msg = 'H';
  }
  select('#result').html(msg);

  // Update confidence
  select('#confidenceA').html(results.confidences[1]);
  select('#confidenceB').html(results.confidences[2]);
  select('#confidenceC').html(results.confidences[3]);
  select('#confidenceD').html(results.confidences[4]);
  select('#confidenceE').html(results.confidences[5]);
  select('#confidenceF').html(results.confidences[6]);
  select('#confidenceG').html(results.confidences[7]);
  select('#confidenceH').html(results.confidences[8]);

  setTimeout(function(){
    predict();
  }, 50);
}

// Clear the data in one class
function clearClass(classIndex) {
  knn.clearClass(classIndex);
}

// Update the example count for each class
function updateExampleCounts() {
  let counts = knn.getClassExampleCount();
  select('#exampleA').html(counts[1]);
  select('#exampleB').html(counts[2]);
  select('#exampleC').html(counts[3]);
  select('#exampleD').html(counts[4]);
  select('#exampleE').html(counts[5]);
  select('#exampleF').html(counts[6]);
  select('#exampleG').html(counts[7]);
  select('#exampleH').html(counts[8]);
}