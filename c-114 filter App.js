NoseX=0;
NoseY=0;
function preload(){
 clown=loadImage('https://i.postimg.cc/4y84YT5C/nose.png');
}
function setup(){
canvas=createCanvas(400, 400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video, modelloaded);
poseNet.on("pose", Gotpose);
}

function Gotpose(results){
    if(results.length>0){
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log(NoseX, NoseY);
    }
}
function modelloaded(){
    console.log("Model Is Prepared");
}
function draw(){
image(video, 0,0, 400, 400);
image(clown, NoseX, NoseY, 30, 30);
}
function take_snapshot(){

}