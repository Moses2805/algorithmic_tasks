//verilmis massivde en boyuk elementlerin cemini tapan proqram

var a = [5,9,3,4,6,9,9,10];
var s = 0;
var max = a[0];
var say = 0;

for(var i = 0; i < a.length; i++) {
	if(a[i] > max) {
		max = a[i];
		say = 1;
	} else if(a[i] == max) {
		say++;
	}

}

	s = s + say*max;


console.log(s)