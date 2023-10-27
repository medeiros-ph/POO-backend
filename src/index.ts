import { ContaBancaria } from "./classes/BankAccount"

const Raphael = new ContaBancaria("Raphael Medeiros", 2121)

Raphael.deposito(100000)

console.log("R$ "+Raphael.saldo)