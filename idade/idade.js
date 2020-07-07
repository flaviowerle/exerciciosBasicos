function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[erro] Verifique os dados !')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked)  {
        genero = 'Homem'
        if(idade>= 0 && idade < 10){
          //criança
          img.setAttribute('src','menino.jpg')
        }else if(idade <=21 ){
          //jovem
          img.setAttribute('src','jovemmenino.jpg')
        }else if(idade <65){
          //adulto
          img.setAttribute('src','homem.jpg')
        }else {
          //idoso
          img.setAttribute('src','idoso.jpg')
        }
    } else if (fsex[1].checked)  {
      genero = 'Mulher'
      if(idade>= 0 && idade < 10){
        //criança
        img.setAttribute('src','menina.jpg')
      }else if(idade <=21 ){
        //jovem
        img.setAttribute('src','jovemmenina.jpg')
      }else if(idade <65){
        //adulto
        img.setAttribute('src','mulher.jpg')
      }else{
        //idoso
        img.setAttribute('src','idosa.jpg')
      }
    }
    res.style.textAlign = 'center' 
    res.innerHTML  =`Detectamos ${genero} com ${idade} anos! `
    res.appendChild(img)
    img.style.borderRadius = "120px"
    img.style.width = "250px"
    img.style.height = "250px"
    img.style.marginBottom = "10px"
       
  }  
}
