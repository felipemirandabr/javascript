let lista = [];
let fnum = document.getElementById('txtnum');
let resultado = document.getElementById('sellista');
function adicionar() {
    let num = Number(fnum.value);
    if (num < 1 || num > 100 || lista.indexOf(num) != -1 || fnum.value.length == 0) {
        window.alert('Valor inválido ou já encontrado na lista.');
    } else {
        lista.push(num);
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        item.value = `tab${num}`;
        resultado.appendChild(item);
    }
    fnum.value = ''; //Zera os valore após chamada da função
    fnum.focus(); //Aponta o cursor para o mesmo campo após chamada da função
}
function finalizar() {
    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        lista.sort((a, b) => a - b);
        let resumo = document.getElementById('res');
        resumo.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`;
        resumo.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}.</p>`;
        resumo.innerHTML += `<p>O menor valor informado foi ${lista[0]}.</p>`;
        let soma = 0;
        for (var c = 0; c < lista.length; c++) {
            soma += lista[c];
        }
        resumo.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        let media = soma / lista.length;
        resumo.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
}