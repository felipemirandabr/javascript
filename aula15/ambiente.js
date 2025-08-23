let num = [5, 8, 2, 9, 3];

num.push(6);
console.log(num);
console.log(num.length);
num.sort();
console.log(num);
/*for (var c= 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}.`);
}*/
var c = 0;
for (c = 0 in num) {
    console.log(`A posição ${c} tem o valor ${num[c]}.`);
}
if (num.indexOf(9) != -1) {
    console.log(num.indexOf(9));
} else {
    console.log(`O número não foi encontrado.`);
}