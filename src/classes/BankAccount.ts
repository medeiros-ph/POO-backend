export class ContaBancaria {
    private _nome: string
    private _senha: number
    private _id: string
    private _saldo: number = 0.00
    constructor(nomeFornecido: string, senhaFornecida: number){
        this._nome = nomeFornecido
        this._senha = senhaFornecida
        this._id = "231132131"
    }

    deposito (v: number) {
        this._saldo += v
    }
    saque (v: number) {
        if (this._saldo >= v){
            return this._saldo -= v
        }else{
            return "Erro, sem saldo suficiente"
        }
        
    }
    
    public get saldo() : number {
        return this._saldo
    }
    public set saldo() : number {
        return this._saldo
    }
}