img="";
statuses='';
object=[];
function preload(){
    img=loadImage('TVAC.jpg');
}
function setup(){
    canvas=createCanvas(640,420,0,0);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML="Status: Detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    if (statuses != "") {
        document.getElementById("status").innerHTML="Objects Detected"
        for (var i = 0; i < object.length; i++) {
            fill("red");
            percent = floor(object[i].confidence * 100);
            textSize(18);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
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
        object=results;
    }
}