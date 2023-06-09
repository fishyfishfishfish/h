noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+",noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        differnce=floor(leftWristX-rightWristX);
        console.log("leftwristx="+leftWristX+"rightwristx="+rightWristX);
    }
}

function draw(){
    background('#9F8303');
    document.getElementById("square_side").innerHTML="width and height of the square are"+difference+"px";
    fill('#964B00');
    stroke('#4f6a56');
    square(noseX,noseY,difference);
}

