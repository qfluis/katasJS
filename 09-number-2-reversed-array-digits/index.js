const digitize = (n) => {
    //return (n+'').split('').reverse();
    /*
    for (let n of arrayN) {
        console.log(n);
        n = parseInt(n);
        console.log(n);
    }
    */

    const arrayRestos = [];
    let resultado = n;

    while (resultado >= 10) {
        arrayRestos.push(resultado % 10);
        resultado = Math.floor(resultado / 10);
    }
    arrayRestos.push(resultado);
    
    return arrayRestos;
    
    
    //return arrayN;

} 

console.log(digitize(12345));
console.log(digitize(0));