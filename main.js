noseX=0;
noseY=0;
function preload()
{
   mustache_img=loadImage("https://i.postimg.cc/CL2wdGSP/Mustache.png");
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is INITIALIZED");
}
function gotPoses(results)
{
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-25;
    noseY=results[0].pose.nose.y;
}
}
function draw()
{
    image(video,0,0,300,300);
   // fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY,20);
    image(mustache_img,noseX,noseY,60,40);   
}
function take_snapshot()
{
    save("mypicture.png");
}