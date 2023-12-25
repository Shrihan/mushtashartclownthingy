function preload(){
   clownnose=loadImage("istockphoto-485318064-612x612.jpeg") 
}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()

}
function draw(){
image(video,0,0,400,400)
fill("black")
circle(10,10,50)
}
