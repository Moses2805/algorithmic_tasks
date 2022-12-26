//verilmis arrayda elementleri bir hahid saga ceken proqram numunesi

var a = [1,2,3,4];
var temp;
var i = a.length - 1;
while(i > 0) {
		temp = a[i];
	a[i] = a[i-1];
	a[i-1] = temp;
	i--;

}

console.log(a)