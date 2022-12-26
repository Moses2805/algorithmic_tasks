//verilmis arrayda menfi olmayan ededlerin uzerine 2 gelib cap edin

var a = [2,-3,9,13,-4,1,8,4];

for(var i = 0; i < a.length; i++) {
	if(a[i] > 0) {
		a[i] = a[i] + 2;
	}
}

console.log(a);
