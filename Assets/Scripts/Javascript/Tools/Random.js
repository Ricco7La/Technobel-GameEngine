Math.Random = {};
Math.Random.RangeInt = function(min,max,isInclusive) {
	if (isInclusive) {
		max ++;
	}
	return Math.random() * (max - min) + min |0 ; 
};
Math.Random.RangeFloat = function(min,max,isInclusive) {
	if (isInclusive) {
		var n = Math.random() * (max+1 - min) + min  ; 
		if (n > max) {
			return max;
		}
	}
	return Math.random() * (max - min) + min  ; 
};
Math.Random.InArray = function(array) {
	var index = Math.Random.RangeInt(0,array.length,true);
	return array[index];
};
Math.Random.InScreen = function(screen) {
	var x = Math.Random.RangeInt(0,screen.width,true);
	var y = Math.Random.RangeInt(0,screen.height,true);
	return {x: x, y: y };
};
Math.Random.InCircle = function(circle) {
	var alpha = Math.Random.RangeFloat(0,2*Math.PI,false);
	return {
		x: circle.x + circle.radius*cos(alpha),
		y: circle.y + circle.radius*sin(alpha)
	};
};
Math.Random.InDisk = function(circle) {
	var alpha = Math.Random.RangeFloat(0,2*Math.PI,false);
	var radius = Math.Random.RangeFloat(0,circle.radius,true);
	return {
		x: circle.x + radius*cos(alpha),
		y: circle.y + radius*sin(alpha)
	};
};
Math.Random.InArea = function(box) {
	var x = Math.Random.RangeInt(box.x,box.width,true);
	var y = Math.Random.RangeInt(box.y,box.height,true);
	return {x: x, y: y };
};

Math.Random.ColorRGB = function() {
	var r = Math.Random.RangeInt(0,256,false);
	var g = Math.Random.RangeInt(0,256,false);
	var b = Math.Random.RangeInt(0,256,false);

	return "rgb("+r+","+g+","+b+")";
};
Math.Random.ColorRGBA = function() {
	var r = Math.Random.RangeInt(0,256,false);
	var g = Math.Random.RangeInt(0,256,false);
	var b = Math.Random.RangeInt(0,256,false);
	return "rgba("+r+","+g+","+b+",1)";
};
Math.Random.ColorHEX = function() {
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.Random.RangeInt(0,letters.length,false)];
    }
    return color;
};

Math.Random.AngleDegree = function(min, max) {
	return Math.Random.RangeInt(min,max,true);
}

Math.Random.AngleDegree = function(min, max) {
	return Math.Random.RangeFloat(min,max,true);
}

Math.Random.IntPondere = function(min, max) {
	
}
Math.Random.IntPondere = function(min, max) {
	
}
