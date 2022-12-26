//verilmis cumlede ilk ve son boslugu tapan proqram numunesi (eger bosluq olmazsa -1 cap etsin);

var sentence = "Salam, dunya. Men Musayam!";

//ilk usul

/*
var pos_end = sentence.lastIndexOf(" ");
var pos_start = sentence.indexOf(" ")

console.log(pos_end, pos_start)
*/


//ikinci usul

var a = [];
for(var i = 0; i < sentence.length; i++) {
	if(sentence[i].charCodeAt() == 32) {
		a.push(i);
		var ilk = a[0];
		var son = a[a.length - 1];
	} 


}

if(ilk == undefined || son == undefined) {
    console.log("-1");

} else {
    console.log(ilk,son);
}
