// class Pessoa{
//     constructor(nome){
//         this.nome = nome;
//     }
// }          *classe no js convencional*


// no typecsript:
class Pessoa {
    nome: string;
    renda?:number;

    constructor(nome:string,renda?:number){ //não pode por o ? no primeiro elemento
        this.nome= nome;
        this.renda= renda;
    }

    disOi(): string{
        return `${this.nome}disse oi`
    }
}

//modificadores:

class ContaBancaria{
    protected saldo:number = 0; // fica disponivel na classe e nas classes filhas
    public numeroConta: number; // acessivel a todos 

    constructor(numeroConta:number){
        this.numeroConta=numeroConta;
    }

    static retornaNumBanco(){  // fica disponivel apenas na classe
        return 125;
    }

    private getsaldo(){

    }
}

class contaPedro extends ContaBancaria {  // para fazer a herança "extends"
    depositar(valor:number):void{
        this.saldo = valor*2;
    }
}

