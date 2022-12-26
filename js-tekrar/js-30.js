//verilmis araliqda olan herflerden basqa diger herfleri soz seklinde cap eden proqram;

var word = "abrakadabra";
var a = 1;
var b = 8;
var new_word = "";

for(var i = 0; i < word.length; i++) {
	if(i < a || i > b) {
		new_word += word[i];
	}
}

console.log(new_word);