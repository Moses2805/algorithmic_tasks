//verilmis iki eded arasindaki ededleri azalma sirasi ile cap edin

var a = 132;
var b = 1171;
var c = a + b;

a = a + 1;


while(c > 0) {
	if(b > a) {
		b--;
		console.log(b);
	} else{
		break;
	}

	c--;

}