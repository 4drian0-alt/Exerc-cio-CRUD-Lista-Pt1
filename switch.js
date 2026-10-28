function menu(opcao){
  const lista = [1,2,3,4,5]

  console.log(" 1 - Listar todos");
  console.log(" 2 - inserir no fim ");
  console.log(" 3 - Inserir em um posição: ");
  console.log(" 4 - Saindo...");
  
  switch(opcao){
      
    case 1 : 
      
      let atual = 0;
      
      while(atual < lista.length){
        console.log(lista[atual]);
        atual++;
      }  
      
      break;
    case 2:
      
      let numero = Number(prompt("Digite um número: "));
      
      lista.push(numero);
      console.log(lista);
      
      break;
    case 3:
      
      let num = Number(prompt("Digite um Numero: "));
      let posicao = Number(prompt("Digite uma Posição: "));
      
      lista.splice(posicao, 0,num);
      console.log(lista);
      
      break;
    default:
    
      console.log("Sair.");
    break;
  }
};
