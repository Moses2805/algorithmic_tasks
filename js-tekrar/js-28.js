//tekrarlanmayan elementleri cap eden proqram numunesi;

var a = [2,3,1,4,5];
var b = [2,1,6,7,8];
var c = [];

for(var i = 0; i < a.length; i++) {
	var tekrar = false;
	for(var j = 0; j < b.length; j++) {
		if(a[i] == b[j]) {
			tekrar = true;
			break;
		}
	}
	if(tekrar == false) {
		c.push(a[i])
	}
}

console.log(c.length,c);