// Verilmis ededin en boyuk reqemini ve nece defe qeyd oldundugunu gosterin.

let a = Number(prompt("eded daxil edin:"));
let max = 0;
let say = 0;


if (!isNaN(a)) {
    while(a > 0){

        number = a % 10;
        if(number > max){
            max = number;
            say = 1;
        } else if(number == max) {
            say++;
        }
    
        a = parseInt(a / 10);

    }
    
    console.log(max, say);
    

} else {
    console.log("dogru eded daxil edin!")
}



