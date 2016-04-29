// v1n, v2n are normalized vector
function DotProduct(v1n,v2n) {
	return v1n.x * v2n.x + v1n.y * v2n.y;
}

function distPointToPoint(p1,p2) {
	return Math.sqrt( (p1.x - p2.x)*(p1.x - p2.x)+(p1.y - p2.y)*(p1.y - p2.y) );
}

function updateForDragAndDrop(gameObject) {
	if (Input.MouseDraging) {
		gameObject.Transform.position.x = Input.MousePosition.x + gameObject.mousePositionOffset.x;
		gameObject.Transform.position.y = Input.MousePosition.y + gameObject.mousePositionOffset.y;
		
		gameObject.Physics.Collider.position = gameObject.Transform.position;
	
	}
}

Math.Clamp = function(number,min,max) {
	return Math.min(Math.max(number, min), max);
};
Math.DegreeToRadian = function(angle) {
	return angle * Math.PI / 180 ;
}
Math.RadianToDegree = function(angle) {
	return angle * 180 / Math.PI ;
}