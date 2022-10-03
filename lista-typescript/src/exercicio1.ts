/*- Exercício 1
    
    Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). 
    A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
    "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" */

    function recebeString(nome:string,dataNacismento:string): string{
      
        const separador:string[]= dataNacismento.split("/")

       return `Olá me chamo ${nome}, nasci no dia ${separador[0]} do mês de ${separador[1]} do ano de ${separador[2]}`
    
    }

 console.log(recebeString("Heloine","12/02/1984"))
   
  