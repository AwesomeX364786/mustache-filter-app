nosex = 0;
nosey = 0; 

function preload(){
  clown_nose = loadImage("https://i.postimg.cc/DfqJvNp2/istockphoto-485318064-612x612.jpg");
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet-Has-Been-Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x-15;
        nosey = results[0].pose.nose.y-10;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
 image(clown_nose, nosex, nosey, 30, 30)
}

function take_snapshot(){
save('https://i.postimg.cc/DfqJvNp2/istockphoto-485318064-612x612.jpg');
}