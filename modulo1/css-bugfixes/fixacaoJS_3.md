function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
let media = (ex + p1 + p2)/3 ; 


   switch(true) {
    case (media >= 9 && media < 9):
       return = "A";
        break;
        
    case (media < 9 && media >= 7.5):
        return = "B";
         break;
         
    case (media < 7.5 && media >= 6):
        return = "C";
         break;
         
       case (media < 6):
        return = "D";
        break;
        
           default:
           return "media"
}
