class roof
{
    constructor(x,y, width, height){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display(){
        var position = this.body.position;

        push()
        translate(position.x, position.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        rect(0, 0, this.width, this.height);
        pop()
    }
}