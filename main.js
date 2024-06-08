
//resize canvas to fit the whole window
const canvas = document.getElementById("mainCanvas");
canvas.width=250;

const ctxt = canvas.getContext("2d");
const car = new Car(100,100,30,50);

//car.draw(ctxt);
move();

function move(){
    car.update();
    //refreshing canvas also clears it
    canvas.height = window.innerHeight;
    car.draw(ctxt);
    //creates move functions to create movement illusion
    requestAnimationFrame(move);
}