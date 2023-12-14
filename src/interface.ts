class conta {
    numeroConta : number;
    saldo: number = 0;

    constructor(numerodaConta:number){
        this.numeroConta = numerodaConta;
    }
}

class contaSalario extends conta{
    depositar(valor:number){
        this.saldo += valor;
    }
}

interface ITransacional { // na interface nao é preciso usar o = antes da chave
    transferir: (valor:number,destinatario:conta) => boolean;
    taxaTransferencia: number;
}

interface Iexemplo{
    cnpj:number;
}

class ContaCorrente extends conta implements ITransacional, Iexemplo{// herança so pode fazer de uma classe por vez, interface nao, pode ser varias
    cnpj: number=0;  
    transferir (valor: number, destinatario: conta) {  //para metodos se tira o () e =>
        destinatario.saldo += (valor-this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number=0;

}

// exemplo de incluir de outra maneira a interface numa const
// const contaMaria : ITransacional = {
    
// }