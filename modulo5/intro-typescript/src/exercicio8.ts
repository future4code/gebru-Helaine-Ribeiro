/*Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .*/
function reverseString(): string {
    let teste = "Testando uma string";
let invertida = teste.split("").reverse().join("");
return invertida;
    }

    reverseString()