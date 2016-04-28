// v1n, v2n are normalized vector
function DotProduct(v1n,v2n) {
	return v1n.x * v2n.x + v1n.y * v2n.y;
}

function distPointToPoint(p1,p2) {
	return Math.sqrt( (p1.x - p2.x)*(p1.x - p2.x)+(p1.y - p2.y)*(p1.y - p2.y) );
}