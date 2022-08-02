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

 



    const iniciarPrograma = prompt("O que você deseja fazer?  vitrine / compra ou zerar estoque").toLocaleLowerCase()
   switch(iniciarPrograma) {
      case "vitrine":
     usuario= prompt("qual tipo de produto deseja ver? alimentos/brinquedos")
      if(usuario ==="brinquedos"){
       produtos= brinquedos.map((produto)=>{
        console.log(produto.nome)
        
       })
       usuario= confirm(" deseja realizar outra visualização de produtos?")

      }else if(usuario ==="alimentos"){
        podutos = alimentos.map((produto)=>{
          console.log(produto.nome)
        })
        usuario= confirm(" deseja realizar outra visualização de produtos?")
     
    }else{
      prompt (" tipo de produto para visualizar")
    }
       
        break;
        
      case  "compra" :
        usuario = (prompt("qual tipo de produto deseja comprar? brinquedos / alimentos"))
         if(usuario==="brinquedos"){
           usuario=prompt( "qual o nome do produto que deseja comprar?")   
          seExiste=brinquedos.filter((produto)=>{
            if(usuario !== produto.nome ) 
            return  true;
        }, {});
          
          }else if(usuario ==="alimentos"){
          usuario=prompt( "qual o nome do produto que deseja comprar?")

          seExiste = brinquedos.find(produto => produto.name === usuario.name);
          
        
      }else{
        alert ("não foi possível realizar a compra.")
      }

      
        break;
       

      case "zerar estoque":
        usuario=prompt("limpar todo o estoque? yes /no  ")
        if(usuario ==="yes"){
          usuario=confirm("realmente deseja prosseguir com a ação")
   
         }else if(usuario ==="no"){
          usuario=confirm("realmente deseja prosseguir com a ação")
         }else{
           usuario= ("operação cancelada")
         }

      
        break;
      default:
        console.log()
      break;
     }
    
     

    /*
   
     //soma das quantidades.
const total = brinquedos.reduce((resultado, quantidade) => {
  return (resultado + quantidade.preço );
}, 0);
console.log( total )
    */
  
    

    