
//Global variables declaration
var my_canvas,context;
//var canvas_width = 400;
//var canvas_height = 200;
var rect_width = 50;
var rect_hegiht = 50;
var x = y = 10;
var incX = 3;
var currentColor = "blue";
var size = 20;
var bounceCont=0;
var rectangleX = 0;
var colors = ['red','blue','green','yellow'];
var currentColor = 0;
var speed = 1;


//var ${test}= 

//console.log(my_canvas.tagName);


function init(){

  // 1. Get the canvas
  my_canvas = document.getElementById("myCanvas");
  //my_canvas.style.width = '400';
  //my_canvas.style.height = '400';

  //my_canvas.style.width = '400';
  //my_canvas.style.width = 400;

  // 2. Get the context
  context = my_canvas.getContext('2d');

  // 3. Draw something
  //drawSomething();

  //setInterval(animation,100); //Fuction called every 10 milliseconds
  
  //console.log(my_canvas.width);   //Default value is 300
  //console.log(my_canvas.height);  //Default value is 150

  
  //setTimeout(animation,100);  //Fuction called every only once after 10 milliseconds
  requestAnimationFrame(animation); //Move shape
  
  //Change color
  setInterval(changeColor,1000);
}


function changeColor(){
  //console.log("currentColor%4: "+currentColor%4);
  context.fillStyle = colors[currentColor%4];
  currentColor += 1;
}
function animation(){
  //console.log("antonio");

  //console.log(my_canvas.width)
  //console.log(my_canvas.height)
  // 1. clear the canvas first
  context.clearRect(0,0,my_canvas.width,my_canvas.height);

   // 2. Draw the second rect (object inside the screen)
   //context.fillStyle = "red";
   context.strokeRect(0,0,my_canvas.width,my_canvas.height);
   context.fillRect(rectangleX,0,rect_width,rect_hegiht);
   
   //3. Move the element
   //Set diferents x (between 0-10)values for each rectangle created
   //context.fillRect(10 + Math.random()*10,0,80,100);

   rectangleX += speed;  
   if(rectangleX>my_canvas.width-rect_width || rectangleX<=0){
    //We invert the positives values to negatives values. Now all (rectangleX += speed) will be negatives
    //We changes the direction of the movement
    speed = -speed;  
   }

   //For do an animation we must call again the setTimeOut Function at the end
   //setTimeout(animation,10);
   //For do an animation we must call again the requestAnimationFrane() function at the end
   requestAnimationFrame(animation);
}
