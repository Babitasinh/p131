img="";
status="";
object=[];

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    object=ml5.objectDetector('cocossed',modelloaded);
    document.getElementById("status").innerHTML="status:Detecting";
}

function preload()
{
    img=loadImage('rabbit.jfif');
}

function draw(){
    image(img,0,0,640,420);
    //fill("yellow");
   // text("rabbit",45,75);
    //noFill();
   // stroke("yellow");
    //rect(30,60,550,350);
if(status!="")
{
  for(i=0;i<object.length;i++)
  {
    document.getElementById("status").innerHTML="Status:object";
    fill("yellow");
    percent=floor(object[i].confidence*100);
    text(object[i].label+" "+percent+"%",object[i].x+30,object[i].y+30);
 noFill();
stroke("yellow");
rect(object[i].x,object[i].y,object[i].width+400,object[i].height+200);
  }  
}
}

function modelloaded(){
    console.log("Model Has Loaded");
    status=true;
    object.detect(img,gotresult);
}

function gotresult(error,result){
   if(error){
    console.log(error);
   }else{
    console.log(result);
    object=result;
   }
}