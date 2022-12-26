//Verilmis edede qeder olan ededlerin kublari olanlarini cap edin

var a = Number(prompt("eded daxil edin:"));

if (!isNaN(a)) {
for(var i = 1; i < a; i++) {
	for(var j = 1; j < a; j++) {
		if(j * j * j == i) {
			console.log(i)
		}
	}

}
} else {
	console.log("dogru eded daxil edin!")
}