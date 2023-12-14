function calculaArea(base:number, altura:number):number{
    return base * altura;
}

const calcula = (base:number,altura:number):number => base*altura

console.log(calculaArea)

namespace casting{
    let idade: any=25;
    (idade as number).toFixed();
    (idade as string).length;
    
}