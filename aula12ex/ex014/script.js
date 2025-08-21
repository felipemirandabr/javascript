function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora <12) {
        img.src = 'imagens/manha.png';
        img.alt = 'Foto do dia'
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png';
        img.alt = 'Foto da tarde'
        document.body.style.background = '#b9846f';
    } else {
        img.src = 'imagens/noite.png';
        img.alt = 'Foto da noite'
        document.body.style.background = '#515154';
    }
}