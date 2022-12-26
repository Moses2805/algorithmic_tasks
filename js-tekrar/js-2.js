// Ededin 100luk mertebesinde olan reqemi tapin

let a = Number(prompt("eded daxil edin:"));

if (!isNaN(a)) {

    let number = parseInt(a / 100) % 10;
    console.log(number);

} else {
    console.log("eded daxil edin!");
}
