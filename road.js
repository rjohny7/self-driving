class Road {
    constructor(left, right, height) {
        this.left = left;
        this.right = right;
        this.height = height;
    }

    pave(ctx) {
        ctx.save();
        ctx.translate(0, -this.height*0.5);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.setLineDash([20,20]);
        ctx.beginPath();
        ctx.moveTo(this.left, this.height);
        ctx.lineTo(this.left, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right, this.height);
        ctx.lineTo(this.right, 0);
        ctx.stroke();
        ctx.restore();
    }
}