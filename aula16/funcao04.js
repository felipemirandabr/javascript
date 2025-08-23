var num = 5;
var fat = 1;
function fatorial(x) {
    for(x; x>1; x--) {
        fat = fat * x;
    } return fat;
}

console.log(`O fatorial de ${num} é ${fatorial(num)}`);