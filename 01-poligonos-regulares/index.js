const PoligonoRegular = require("./Poligono");

const triangulo = new PoligonoRegular(10, 3);
console.log(triangulo.infoPoligono());

const cuadrado = new PoligonoRegular(10, 4);
console.log(cuadrado.infoPoligono());

const pentagono = new PoligonoRegular(10, 5);
console.log(pentagono.infoPoligono());

const poligonoR = new PoligonoRegular(10, 11);
console.log(poligonoR.infoPoligono());