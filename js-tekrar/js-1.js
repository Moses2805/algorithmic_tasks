// 4 reqemli ededin ilk ve son reqemleri cemini hesablayin

let a = Number(prompt("4 reqemli eded daxil edin:"));


if (!isNaN(a) && parseInt(a / 1000) > 0 && parseInt(a / 1000) <10) {
  
    let firstNumber = parseInt(a / 1000);
    let lastNumber = a % 10;

    console.log(firstNumber + lastNumber);
  }
else{
    console.log("dogru eded daxil edin!")
}
