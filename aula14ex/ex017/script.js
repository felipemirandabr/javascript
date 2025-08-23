function tabuada () {
    let numero = document.getElementById('txtnum');
    let resultado = document.getElementById('seltab');
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let num = Number(numero.value);
        resultado.innerHTML = '';
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${num} X ${c} = ${num * c}`;
            item.value `tab${c}`;
            resultado.appendChild(item);
        }
     };
};