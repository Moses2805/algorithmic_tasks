//verilmis ededin tek bolenlerini cap eden funksiya

function numbers(number) {
    var b = []

    for(var i = 1; i < number; i++) {
	    if(i % 2 != 0 && 21 % i == 0) {
		    b.push(i);
	    }
    }
    return b;
}

let result = numbers(21)
console.log(result)