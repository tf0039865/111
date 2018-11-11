// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

 *===
ML5 Example
KNN_Image
KNN Image Classifier example with p5.js
=== */

let knn;
let video;
const btn = document.getElementById("buttonNew")
const cdn = document.getElementById("t1")
var t1_num=100;
function t1_f(){
	
	cdn.innerHTML =  t1_num;
	if(t1_num==0){
		cdn.styleSheets.display="none";
		predict();
		cleaTimeout(ct);
	}else{
		t1_num--;
		ct = setTimeout(t1_f,1000);
	}
	
	
}
function setup() {
  noCanvas();
  video = createCapture(VIDEO).parent('videoContainer');
  * Create a KNN Image Classifier

  knn = new ml5.KNNImageClassifier(8, 1, modelLoading, video.elt);
  knn.load('test.json', modelLoaded);
  
  createButtons();
}

function createButtons() {
 
  * Predict Button
  buttonPredict = select('#buttonNew');
  buttonPredict.mousePressed(restart);
}


function restart() {
   //播放聲音 var voicel = new Audio ("**.wav");
   //voicel.play();
   t1_f();
   btn.style.display = "none";
   predict();

}


* A function to be called when the model has been loaded
function modelLoaded() {
  select('#loading').html('猜水果模組載入成功');
}

function modelLoading() {
  select('#loading').html('猜水果模組載入中……');
}


* Predict the current frame.
function predict() {
  knn.predictFromVideo(gotResults);
}

* Show the results
function gotResults(results) {
  let msg;

  if (results.classIndex == 1) {
    msg = '香蕉';
	document.getElementById("myImg").src = "t1.png";
  } else if (results.classIndex == 2) {
    msg = '蘋果';
	document.getElementById("myImg").src = "t2.png";
  } else if (results.classIndex == 3) {
    msg = '哈密瓜';
	document.getElementById("myImg").src = "t3.png";
  }else if (results.classIndex == 4) {
    msg = '木瓜';
    document.getElementById("myImg").src = "t4.png";
  }else if (results.classIndex == 5) {
    msg = '蓮霧';
    document.getElementById("myImg").src = "t5.png";
  }else if (results.classIndex == 6) {
    msg = '芭樂';
    document.getElementById("myImg").src = "t6.png";
  }else if (results.classIndex == 7) {
    msg = '西瓜';
    document.getElementById("myImg").src = "t7.png";
  }else if (results.classIndex == 8) {
    msg = '番茄';
    document.getElementById("myImg").src = "t8.png";
  select('#result').html(msg);

  win_t = setTimeout(win , 3000);
   
}

* Clear the data in one class
function clearClass(classIndex) {
  knn.clearClass(classIndex);
}
function win () {
	cdn.innerHTML ="WIN";
	cdn.style.display = "";
	t1_num = 100;
	document.getElementById("myImg").src ="";
	 btn.style.display = "";
}

