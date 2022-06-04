//Class for cars
class Car{
    constructor(xloc,yloc,width,height){
        this.xloc = xloc;
        this.yloc = yloc;
        this.width = width;
        this.height = height;

        this.v = 0;
        this.a = 0.3;
        this.angle = 0;
        this.controls = new Controls();
    }
    update(){
        if(this.controls.up){
            this.v += this.a;
        }
        if(this.controls.down){
            this.v -= this.a;
        }
        // cap speeds at 5
        if(this.v > 5){
            this.v = 5;
        }
        if(this.v < -5){
            this.v = -5;
        }
        this.xloc -= Math.sin(this.angle)*this.v;
        this.yloc -= Math.cos(this.angle)*this.v;
        if(this.controls.left){
            this.angle += 0.05;
        }
        if(this.controls.right){
            this.angle -= 0.05;
        }
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.xloc,this.yloc);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
        ctx.restore();
    }
}