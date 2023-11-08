//Objeto != Classe
//Propriedades: Variáveis
//Método: função 

const Smartphone = {
  brand: "Apple",
  model: "iPhone 15",
  date: 2023,
  opiniao(){
    console.log("The Best Smartphone Ever!")
    },
  avaliacao (score: number){
    console.log("This iPhone has",score,"like score.")
    }
 }

 Smartphone.avaliacao(10)