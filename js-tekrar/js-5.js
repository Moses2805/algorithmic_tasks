// verilmis ededde teklif ve onluq reqemlerin yerini deyisin

let a = Number(prompt("eded daxil edin:"));

if (!isNaN(a)) {
  let lastNumber = a % 10;
  let middleNumber = parseInt(a / 10) % 10;
  a = a - lastNumber - middleNumber * 10;
  a = a + lastNumber * 10 + middleNumber;
  console.log(a);
} else {
  console.log("eded daxil edin!");
}
