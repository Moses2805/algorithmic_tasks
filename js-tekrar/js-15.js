//verilmis ededi terz ceviren proqram

var a = 7664411;
var mertebe = a.toString().length;
var yekun_cem = 0;


while(mertebe > 0) {
	var sonreqem = a % 10;
	yekun_cem = yekun_cem + sonreqem*10**(mertebe-1);
	mertebe--;
	a = parseInt(a / 10);

}

console.log(yekun_cem)