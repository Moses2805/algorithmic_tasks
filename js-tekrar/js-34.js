//verilmis stringde ededin ilk ve son reqemi cemini tapan proqram numunesi;

var eded = "23451342354657687";
eded = eded.split("");
console.log(eded);
var count = Number(eded[0]) + Number(eded[eded.length - 1]);
console.log(count)