"use strict";
// class Pessoa{
//     constructor(nome){
//         this.nome = nome;
//     }
// }          *classe no js convencional*
// no typecsript:
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    disOi() {
        return `${this.nome}disse oi`;
    }
}
//modificadores:
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0; // fica disponivel na classe e nas classes filhas
        this.numeroConta = numeroConta;
    }
    static retornaNumBanco() {
        return 125;
    }
    getsaldo() {
    }
}
class contaPedro extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
