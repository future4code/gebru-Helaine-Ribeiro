/*Escreva um programa que converta uma string de DNA em uma string de RNA. Para os exemplos acima, a entrada seria
 `"ATTGCTGCGCATTAACGACGCGTA"` e a saída `"UAACGACGCGUAAUUGCUGCGCAU"`*/
 const converter: string = "ATTGCTGCGCATTAACGACGCGTA";
const resultado = converter.replace("ATTGCTGCGCATTAACGACGCGTA", "UAACGACGCGUAAUUGCUGCGCAU");

console.log(resultado)