// verilmis ededin reqemleri cemini tapan proqram

let a = Number(prompt("eded daxil edin:"));
let S = 0;

if (!isNaN(a)) {

    while (parseInt(a / 10) > 0) {

        S = S + (a % 10);
    
        a = parseInt(a / 10);
    
    }
    
    S = S + a;
    
    console.log(S);
} else {
    console.log("dogru daxil edin!");
}


