
//resize canvas to fit the whole window
const canvas = document.getElementById("mainCanvas");
canvas.width=250;
const inf = 100000;
const ctxt = canvas.getContext("2d");
const road = new Road(10, canvas.width-10, inf);
const car = new Car(100,100,30,50);


simulate();

function simulate(){
    car.update();
    //refreshing canvas also clears it
    canvas.height = window.innerHeight;
    ctxt.save();
    ctxt.translate(0,-car.yloc + canvas.height*0.5);
    road.pave(ctxt);
    car.move(ctxt);
    ctxt.restore();
    //creates move functions to create movement illusion
    requestAnimationFrame(simulate);
}