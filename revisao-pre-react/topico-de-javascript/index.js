
//exercicio 1
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

    const salariofixo = 2000
    const comisao = 100 
    const salarioFinal = salariofixo  + (comisao *qtdeCarrosVendidos) + (valorTotalVendas * 0.05);
  
   return salarioFinal
    
  }
