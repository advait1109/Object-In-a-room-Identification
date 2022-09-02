img="";
statuses='';
function preload(){
    img=loadImage('desk.jpeg');
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
    text("Desk",100,230);
    noFill();
    stroke("red");
    rect(85,200,500,200);
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