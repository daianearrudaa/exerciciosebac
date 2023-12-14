"use strict";
class conta {
    constructor(numerodaConta) {
        this.saldo = 0;
        this.numeroConta = numerodaConta;
    }
}
class contaSalario extends conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends conta {
    constructor() {
        super(...arguments);
        this.cnpj = 0;
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
// exemplo de incluir de outra maneira a interface numa const
// const contaMaria : ITransacional = {
// }
