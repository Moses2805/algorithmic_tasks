//verilmis arraydaki elementleri bir addim sola surusduren proqram

var a = [1,2,3,4];
var temp;



for(var i = 0; i < a.length - 1; i++) {

	temp = a[i];
	a[i] = a[i+1];
	a[i+1] = temp;

}

console.log(a)
