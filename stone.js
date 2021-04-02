class stone
{
	constructor(x,y,diametre)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;

		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, diametre, options);
		this.diametre=diametre;
		World.add(world, this.body);

	}
	display()
	{
				
			push()
			translate(this.body.position.x, this.body.positon.y);
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.diametre, this.diametre);
			pop()
			
	}

}