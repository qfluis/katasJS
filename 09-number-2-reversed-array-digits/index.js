const digitize = (n) => {
    const arrayRestos = [];
    let resultado = n;

    while (resultado >= 10) {
        arrayRestos.push(resultado % 10);
        resultado = Math.floor(resultado / 10);
    }
    arrayRestos.push(resultado);
    
    return arrayRestos;
} 

console.log(digitize(12345));
console.log(digitize(0));

/* Otras soluciones

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

*/