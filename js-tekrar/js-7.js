// verilmis ededin tek reqemlerinin hasilini tapin

var a = Number(prompt("eded daxil edin:"));
var sum = 1;
var say = 0;

if (!isNaN(a)) {
    while(a > 0) {
	    number = a % 10;
	    if(number % 2 != 0) {
		    sum = sum * number;
		    say++;
	    }

    a = parseInt(a / 10);

}
} else {
	console.log("dogru eded daxil edin!")
}

if(say != 0){
    console.log(sum, say);
} else {
	console.log("-1");
}