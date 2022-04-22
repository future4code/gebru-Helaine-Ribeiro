/**/ 

  const alimentos=[
    {  nome:"arroz", volume:1, preço:22, dataDeValidade:"15.06.2022", quantidade:3},
    {  nome:"feijão", volume:1, preço:10, dataDeValidade:"15.06.2022", quantidade:2},
    {  nome:"café", volume:1, preço:26, dataDeValidade:"15.06.2022", quantidade:3},
    {  nome:"açúcar", volume:1, preço:12, dataDeValidade:"15.06.2022", quantidade:3}
]
const brinquedos = [
    {   nome:"bola", preço:25, classificacaoIndicada:"maiores de 5 anos", quantidade:2},
    {   nome:"boneca", preço:55, classificacaoIndicada:"maiores de 5 anos", quantidade:2},
    {   nome:"carrinho", preço:25, classificacaoIndicada:"maiores de 5 anos", quantidade:2},
    {   nome:"patins", preço:25, classificacaoIndicada:"maiores de 5 anos", quantidade:2},
]




const lojinhaNoConsole=()=>{
    const iniciarPrograma = prompt("O que você deseja fazer?  vitrine / compra ou zerar o estoque") 
   
   switch(iniciarPrograma) {
      case "vitrine" :
      console.log (prompt("qual tipo de produto deseja ver? alimentos/brinquedos"))
      
      console.log (prompt("qual tipo de produto deseja ver? brinquedos "))
      
        break;
      case  "compra" :
        console.log(prompt("qual tipo de produto deseja comprar? brinquedos / alimentos"))
  
        break;
      case "zerar o estoque":
        console.log(confirm("limpar todo o estoque"))=== true
        console.log(confirm("realmente deseja prosseguir com a ação"))
        break;
      default:
        console.log()
      break;
     }
    }

  // lista do tipo de produto selecionado (brinquedos).
  const listaProdutos=[]
  const usuario= ""
  confirm("deseja realizar outra visualização de produtos")
  if(usuario === true){
console.log("programa encerrado")

  }else if(usuario===false){
prompt(listaProdutos = brinquedos.filter)
  }
  // lista do tipo de produto selecionado (alimentos).


     // Verifica se já existe esse produto na lista
     const seExiste = alimentos.find(element => element[0] === nome);

     if (seExiste) {
       prompt("qual a quantidade a ser comprada?");
       
     } else if(!seExiste){
      alert("não foi possível realizar a compra.");
     }
 
     produtos.push([nome, preço]);

     
     //soma das quantidades.
const total = brinquedos.reduce((resultado, quantidade) => {
  return (resultado + quantidade.preço );
}, 0);
console.log( total )
    

    