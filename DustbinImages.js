class DustbinImage {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image=loadImage("sprites/dustbingreen.png");
       // World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill(255)
		imageMode(CENTER);
		image(this.image,600,600,200,200);
			
      }
};