//verilmis stringde ededi ters ceviren funksiya

function customReverse(string) {
	var newNumber = "";
	for(var i = string.length - 1; i >= 0; i--) {
	newNumber += string[i];
}
    return newNumber;
}

let result = customReverse("1234567")

console.log(result);