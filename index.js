window.onload = function() {
    let canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    let gravity = 1;
    let fraction = 0.9;
    function Ball(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    Ball.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.strokeStyle = "#fff";
        ctx.stroke();
        ctx.fillStyle = "#fff";
        ctx.fill();
    }

    Ball.prototype.update = function() {
        this.y+=this.dy;
        // console.log(this.y);
        if(this.y+this.radius - 8 > canvas.height) {
            this.dy = -this.dy * fraction;
        }else {
            this.dy += gravity;
        }
        // console.log('Yay!');
    }

    let x = canvas.width/2;
    let y = canvas.height/2;
    let radius = 30;
    let dx = 8;
    let dy = 8;
    let ball = new Ball(x, y, dx, dy, radius);
    console.log(ball);

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ball.draw();
        ball.update();
    }
    animate();

}