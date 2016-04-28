var Physics = {
	PointBoxCollision: function(point, box) {
		return ( (point.x >= box.x && point.x <= box.x + box.w ) && (point.y >= box.y && point.y <= box.y + box.h ) ) ;
	},
	BoxBoxCollision: function(box1,box2) {
		/*if ( box1.x >= box2.x && box1.x <= box2.x + box2.w ) ||
			( box1.x + box1.w >= box2.x && box1.x + box1.w <= box2.x + box2.w ) {
				if ( box1.y >= box2.y && box1.y <= box2.y + box2.h ) ||
					( box1.y + box1.h >= box2.y && box1.y + box1.h <= box2.y + box2.h ) {
					return true
				}	
		}
		if ( box2.x >= box1.x && box2.x <= box1.x + box1.w ) ||
			( box2.x + box2.w >= box1.x && box2.x + box2.w <= box1.x + box1.w ) {
				if ( box2.y >= box1.y && box2.y <= box1.y + box1.h ) ||
					( box2.y + box2.h >= box1.y && box2.y + box2.h <= box1.y + box1.h ) {
					return true
				}
		}
		return false;*/
		if (box2.x >= box1.x + box1.w 
			|| box2.x + box2.w <= box1.x 
			|| box2.y >= box1.y + box1.h 
			|| box2.y + box2.h <= box1.y ) 
		{
			return false;
		}
		return true;

	},
	PointCircleCollision: function(point, circle ) {
		var dist = distPointToPoint( point, circle );
		return dist < circle.radius ;
	},
	CircleCircleCollision: function(circle1, circle2) {
		var dist = distPointToPoint( circle1, circle2 );
		return dist < circle1.radius + circle2.radius ;
	},
	CircleBoxCollision: function(circle, box) {
		var distX = Math.abs( circle.x - box.x - box.w / 2 );
		var distY = Math.abs( circle.y - box.y - box.h / 2 );

		if ( distX > (box.w/2 + circle.radius) ) {return false;}
		if ( distY > (box.h/2 + circle.radius) ) {return false;}
		if (distX <= box.w/2) {return true;}
		if (distY <= box.h/2) {return true;}

		var dx = distX - box.w/2;
		var dy = distY - box.h/2;
		return (dx*dx + dy*dy <= circle.radius * circle.radius);

	},
	TileCollision: function(map, sizeMap, position, direction) {
		if (direction == 1 && position.y == 0) { return false; }
		if (direction == 2 && position.x == sizeMap.x - 1) { return false; }
		if (direction == 3 && position.y == sizeMap.y - 1) { return false; }
		if (direction == 4 && position.x == 0) { return false; }

		var nextIndex = {x:position.x,y:position.y};
		switch(direction) {
			case 1:
				nextIndex.y--;
				break;
			case 2:
				nextIndex.x++;
				break;
			case 3:
				nextIndex.y++;
				break;
			case 4:
				nextIndex.x--;
				break;
		}
		//nextIndex = nextIndex.y * sizeMap.x + nextIndex.x;

		for (i in WalkableTiles) {
			if (i == map[nextIndex.y * sizeMap.x + nextIndex.x]) {
			 	return true;
			 } 
		}
		return false;
	}
};

function Box(x,y,w,h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

function Circle(cx,cy,r) {
	this.x = cx;
	this.y = cy;
	this.radius = r;
}