song = "";
leftWristX = 0;
leftWristY = 0;
scoreLeftWrist = 0;

function preload(){
    song =  loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(450,180);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);66
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " +scoreRightWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX +"rightWristY = "+ rightWristY);
    }
}