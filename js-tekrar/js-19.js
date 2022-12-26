//arrayin max-in tapib arraydan cixaran proqram

var arr = [11,21,4,10,9,2,22,5,22,22];
var max = arr[0];
var say = 0;
var i = 0;

for(i = 0; i < arr.length; i++) {
	if(arr[i] > max) {
		max = arr[i];
		say = 1;
	} else if(arr[i] == max) {
		say++;
	}



}


var index = arr.indexOf(max);


arr.splice(index, 1);
console.log(arr)



console.log(max,say)