//input = 4; output = 2 + 22 + 222 + 2222

var a = 4;
var mertebe_cemi = 0;
var mertebe = 0;
var toplam = 0;

while(a > 0) {
	mertebe_cemi = mertebe_cemi + 2*(10**mertebe);
	toplam += mertebe_cemi;
	mertebe++;
	a--;
}

console.log(toplam);
