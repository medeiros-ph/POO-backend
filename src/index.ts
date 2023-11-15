//Objeto != Classe
//Propriedades: Variáveis
//Método: função 
/*
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
 */




//Questao 01

class Pessoa {
  constructor(nome, idade, genero, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.endereco = endereco;
  }

  atualizarNome(novoNome) {
    this.nome = novoNome;
  }

  atualizarIdade(novaIdade) {
    this.idade = novaIdade;
  }

  atualizarGenero(novoGenero) {
    this.genero = novoGenero;
  }

  atualizarEndereco(novoEndereco) {
    this.endereco = novoEndereco;
  }

  obterInformacoes() {
    return `\n Nome: ${this.nome},\n Idade: ${this.idade},\n Gênero: ${this.genero},\n Endereço: ${this.endereco}\n\n`;
  }
}

// Criar uma instância da classe Pessoa
const pessoa = Pessoa();


// Chamar métodos na instância
pessoa.atualizarNome("Maria");
pessoa.atualizarIdade(23);
pessoa.atualizarGenero("Feminino");
pessoa.atualizarEndereco("Rua ABC, 123");
console.log("----- Questão 01 -----")
console.log(pessoa.obterInformacoes());


//Questao 02

class Veiculo {
  constructor(Marca, Modelo, Ano, FIPE) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Ano = Ano;
    this.FIPE = FIPE;
  }

  atualizarMarca(novoMarca) {
    this.Marca = novoMarca
  }

  atualizarModelo(novaModelo) {
    this.Modelo = novaModelo;
  }

  atualizarAno(novoAno) {
    this.Ano = novoAno;
  }

  atualizarFIPE(novoFIPE) {
    this.FIPE = novoFIPE;
  }

  obterInformacoes() {
    return `\n Marca: ${this.Marca},\n Modelo: ${this.Modelo},\n Fabricação: ${this.Ano},\n FIPE: ${this.FIPE}\n\n`;
  }
}

// Criar uma instância da classe Pessoa
const veiculo = Veiculo();


// Chamar métodos na instância
veiculo.atualizarMarca("Hyundai");
veiculo.atualizarModelo("Hatch Limited 1.0 MT6");
veiculo.atualizarAno(2023);
veiculo.atualizarFIPE(89999);
console.log("----- Questão 02 -----")
console.log(veiculo.obterInformacoes());

//Questao 03
class Animal {
  constructor(Tipo, Cor, Tamanho) {
    this.Tipo = Tipo;
    this.Cor = Cor;
    this.Tamanho = Tamanho;
  }

  atualizarTipo(novoTipo) {
    this.Tipo = novoTipo
  }

  atualizarCor(novoCor) {
    this.Cor = novoCor
  }

  atualizarTamanho(novoTamanho) {
    this.Tamanho = novoTamanho;
  }

  obterInformacoes() {
    return `\n Tipo: ${this.Tipo},\n Cor: ${this.Cor},\n Tamanho: ${this.Tamanho}\n\n`;
  }
}

// Criar uma instância da classe Pessoa
const animal = Animal();


// Chamar métodos na instância
animal.atualizarTipo("Terrestre");
animal.atualizarCor("Marrom");
animal.atualizarTamanho("2 metros");

console.log("----- Questão 03 -----")
console.log(animal.obterInformacoes());
