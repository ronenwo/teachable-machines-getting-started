// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
//let imageModelURL = 'https://teachablemachine.withgoogle.com/models/YFH20nUW/model.json';
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/zd_XwkwT/model.json';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

let cats;



// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
}

function setup() {
 let cnv =  createCanvas(640, 370);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);  

  // create cats video
  cats = createVideo(['assets/cats.mp4']);
  cats.size(width, height);
  cats.hide();
  cats.loop();

  // Create the video from camera
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
  //frameRate(1);
}

function draw() {
  background(0);
  // Draw the video
  //image(flippedVideo, 0, 0);
  image(cats,0,0);
  
  
  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  
  if (label == "cup logo"){
    cats.pause();
    // fill(255,0,0);
    // ellipse(100,100,100,100);
  }
  else if (label == "cup no logo"){
    cats.loop();
    // fill(0,255,0);
    // ellipse(100,100,200,200);      
  }
  else{
    
  }
  // Classifiy again!
  classifyVideo();
}