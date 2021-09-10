function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `${hora}:${minuto}`
    
    if(hora >= 0 && hora < 12){
        //manha
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ffe6bd'
    } else if(hora >= 12 && hora < 18){
        //tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e78b00'
    } else {
        //noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1e1e1fa8'
    }
}