//verilmis cumlede axtarilan herfin nece defe rast gelindiyini gosteren proqram numunesi(boyuk ve kicik herfler eyni goturulur);

var sentence = "Salam, dunya. Men Musayam";
var search_letter = "m";
var count = 0;

sentence = sentence.toLowerCase();
search_letter = search_letter.toLowerCase();

for(var i = 0; i < sentence.length; i++) {
	if(search_letter == sentence[i]) {
		count++;
	}
}

console.log(count);