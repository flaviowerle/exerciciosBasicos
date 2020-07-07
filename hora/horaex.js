function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()   
    if (hora>= 0 && hora < 12){

        img.src = 'manha.jpg'
        document.body.style.background ='#e2cd9f'
        msg.innerHTML = `<p>Bom dia!</p><p1>Agora são ${hora}:${minuto} Hs.</p1>`
              
    } else if (hora>= 12 && hora < 18){

        img.src = 'tarde.jpg'
        document.body.style.background ='#b9846f'
        msg.innerHTML = `<p>Boa tarde!</p><p1>Agora são ${hora}:${minuto} Hs.</p1>`
    } else {
        img.src = 'noite.jpg'
        document.body.style.background ='#4b9494'
        msg.innerHTML = `<p>Boa noite!</p><p1>Agora são ${hora}:${minuto} Hs.</p1>`


    }
}


