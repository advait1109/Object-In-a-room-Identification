img="";
statuses='';
function preload(){
    img=loadImage('bottles.jpg');
}
function setup(){
    canvas=createCanvas(640,420,0,0);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML="Status: Detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    textSize(18);
    text("Bed",54,30);
    noFill();
    stroke("red");
    rect(50,10,550,400);
}
function modelLoaded(){
    console.log('Model has Loaded');
    statuses=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }    
    else{
        console.log(results);
    }
}