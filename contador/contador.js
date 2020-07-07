function contar(){
   var ini = document.getElementById('txtin')
   var fin = document.getElementById('txtfim')
   var pa = document.getElementById('txtpas')
   var res = document.getElementById('res')
    if(fin.value.length == 0 || ini.value.length == 0 || pa.value.length == 0){
       res.innerHTML ='[ERRO] Dados incompletos!!'
    }else{
      res.innerHTML = ('Contando...')+'<br/>' 
      var i =Number (ini.value)
      var f =Number (fin.value)
      var p =Number (pa.value)
      if (p<=0){
         res.innerHTML = 'passo errado, considerando passo 1'
         p=1
      } 
      if(i<f){
         //contagem crescente
         for(let c = i;c<=f;c+=p){
            res.innerHTML += `${c} \u{1F449}` 
      }
      }else{
         //contagem regressiva
         for(let c = i;c>=f;c-=p){
            res.innerHTML += `${c} \u{1F449}`
         }
      }
      res.innerHTML += `\u{1F3C1}`
      }
}



