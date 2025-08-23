function contar() {
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let res = document.getElementById('res');
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        res.innerHTML = `Impossível Contar!`;
    } else {
        res.innerHTML = `Contando:</br>`;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo inválido! Considernado PASSO 1');
            p = 1;
        }
        if (i < f) {
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{1F449} `;
            }
        } else {
            for (i; i >= f; i -= p) {
                res.innerHTML += `${i} \u{1F449} `;
            }
        }
        
    res.innerHTML += `\u{1F3C1}`;
    }
}