let pessoa = {
    nome: "Raphael Medeiros",
    idade: 31,
    envelhecer(){
        console.log(this.nome)
    }
}
console.log(pessoa.idade)

pessoa.envelhecer()