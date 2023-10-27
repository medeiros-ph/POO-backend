let pessoa = {
    nome: "Raphael Medeiros",
    idade: 31,
    envelhecer(){
        console.log(this.nome)
    }
}
//console.log(pessoa.idade)
//pessoa.envelhecer()

// class Gato {
//     nome: string
//     idade: number
//     raca!: string "siames"
//     constructor(nomeFornecido: string, idadeFornecido: number){
//         this.nome = nomeFornecido
//         this.idade = idadeFornecido
//     }
//     gatoMia(){
//         console.log(this.nome)
//     }
// }

class Conta {
    nome: string
    senha: number
    id: string
    private _saldo: number = 0.00
    constructor(nomeFornecido: string, senhaFornecida: number){
        this.nome = nomeFornecido
        this.senha = senhaFornecida
        this.id = "231132131"
    }

    deposito (v: number) {
        this._saldo += v
    }
    saque (v: number) {
        this._saldo -= v
    }
    
    public get saldo() : number {
        return this._saldo
    }
}

const Raphael = new Conta("Raphael Medeiros", 2121)

Raphael.deposito(100000)

console.log(Raphael.saldo)