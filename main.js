


function Marca(marca) {
    this.marca=marca;
    
}

function Carro(marca,modelo,kilometragem){
    this.marca=marca;
    this.modelo=modelo;
    this.kilometragem=kilometragem;

    Marca.call(this,marca)
}

function Moto(marca, modelo,kilometragem, cor){
    this.marca=marca;
    this.modelo=modelo;
    this.kilometragem=kilometragem;
    this.cor=cor;

    Carro.call(marca,modelo,kilometragem);
}

function VeiculoAquatico(marca, modelo, tipo) {
    this.marca=marca;
    this.modelo=modelo;
    this.tipo = tipo;
  
    Marca.call(this, marca);
  }



const carro = new Carro("Fiat","Gol","50.000 km");
const moto = new Moto("Honda", "Fan 125","5.000km", "Vermelha");
const jetski = new VeiculoAquatico("Sea-Doo", "RXT", "Jetski");


console.log(carro);
console.log(moto);
console.log(jetski);