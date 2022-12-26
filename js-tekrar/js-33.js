//verilmis araliqda cumledeki herfleri cixarib qalan cumleni cap eden proqram;


var sentence = "This is my lovely beautiful house";
var a = 7;
var b = 16;
var new_word = []

for(var i = 0; i < sentence.length; i++) {
	if(i < a || i > b) {
		new_word = new_word + sentence[i];
	}
}

console.log(new_word);