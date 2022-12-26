//arrayda minimum element

var array = [0,1,2];
var min = array[0];

for(var i = 0; i < array.length; i++) {
	if((array[i] <= min) && array[i] > 0){
		min = array[i];
	}

}


