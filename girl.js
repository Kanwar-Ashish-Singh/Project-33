class Girl {
    constructor(x,y,width,height){
        var opt = {
          restitution: 0
    
        }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("girlPicture.jpg");
    World.add(world, this.body)
    }
    display(){
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        image (this.image,0,0,this.width,this.height)
    }
    }