//verilmis arrayda en boyuk elementi ve sayini tapin

var array = [11,9,10,9,12,8,4,7,12,9,10];
var max = 0;
var say = 0;

for(var i = 0; i < array.length; i++) {
  if(array[i] > max) {
    max = array[i];
    say++;
  }
}

console.log(max,say);

