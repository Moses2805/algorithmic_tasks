//verilmis massivde en boyuk iki ededin cemini tapan proqram

var a = [2,3,4,1,5,10,11,8];
var S = 0;
var max1 = 0;
var max2 = 0;

for(var j = 0; j < a.length; j++) {
	for(var i = 0; i < a.length; i++) {
	if(a[i] > max1) {
		max1 = a[i];
		var index = a.indexOf(a[i]);
		a.splice(index,1)
	}

}

if(a[j] > max2){
	max2 = a[j]
}
}



console.log(max1 + max2)