function executa(){
  dados = '';
  var dados =	document.formulario.campo1.value;
  var resultado = dados.split(" ");
  var num1 = resultado[0];
  var num2 = resultado[1];
  var num3 = resultado[2];
  var num4 = resultado[3];
   if(dados == ' ') {
     alert("digite algo");
   }else{
     lupa();
   }
  dados = '';
}
function lupa(){
var dados = document.formulario.campo1.value;
var resultado = dados.split(" ");
var num1 = resultado[0];
var num2 = resultado[1];
var f = 0;
var palavrasFase1 = ["espada","chute","soco","flecha"];

function compara(resultado,palavrasFase1){
  var count=0;
  for(var i=0; i<resultado.length; i++){
  for (var v=0; v<palavrasFase1.length; v++){
  if (resultado[i]==palavrasFase1[v]){
  count++;
     }
   }
  }
  return count;
};
  if((compara(resultado,palavrasFase1))){
    alert("voce acertou uma palavra");
  }else{
  alert("Infelizmente vc nao acertou a palavra!!")
  }
  return;
  };
