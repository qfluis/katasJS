class PoligonoRegular {
    constructor(longitudLado, numLados) {
        this.longitud = longitudLado;
        this.lados = numLados;
    }

    perimetro () {
        return this.lados * this.longitud;
    }
    
    semiperimetro () {
        return this.perimetro() / 2;
    }

    anguloInterior() {
        return 180 * ((this.lados - 2) / this.lados);
    }

    anguloCentral() {
        return 360 / this.lados;
    }

    anguloExterior() {
        //return 180 - this.anguloInterior();
        return this.anguloCentral();
    }
    numDiagonales() {
        return (this.lados * (this.lados - 3)) / 2
    }
    /*
    radio() {
        return this.longitud / (2 * Math.sin(this.anguloCentral()/2));
    }
    */

    infoPoligono () {
        let resp = `#### INFO POLIGONO REGULAR DE ${this.lados} LADOS X ${this.longitud}cm ####\n`;
        resp += `Perímetro: ${this.perimetro()}cm\n`;
        resp += `Semiperímetro: ${this.semiperimetro()}cm\n`;
        resp += `Ángulo Interior: ${this.anguloInterior()}º\n`;
        resp += `Ángulo Exterior: ${this.anguloExterior()}º\n`;
        resp += `Ángulo Central: ${this.anguloCentral()}º\n`;
        resp += `Número de Diagonales: ${this.numDiagonales()}\n`;
        //resp += `Radio: ${this.radio()}cm\n`;

        return resp;
    }
}

module.exports = PoligonoRegular;