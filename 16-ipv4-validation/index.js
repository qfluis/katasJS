const isValidIP = (str) => {
    let arrNumbers = str.split('.');
    if (arrNumbers.length !== 4) return false;

    for(let number of arrNumbers) {
        if (/D+/.test(number)) return false; // 1 o + carácteres que no son digitos
        if (number.length === 0) return false;
        if (number[0] === '0' && number.length > 1) return false;
        if (number !== number.trim()) return false;
        if (number.indexOf('e') !== -1) return false;

        let n = Number(number);
        if(!(n >= 0 && n <=255)) return false;
    }
    
    return true;
}



console.log(isValidIP('1.2.3.4')); // true
console.log(isValidIP('123.45.67.89')); // true

console.log(isValidIP('1.2.3')); // false
console.log(isValidIP('1.2.3.4.5')); // false
console.log(isValidIP('123.456.78.90')); // false
console.log(isValidIP('123.045.067.089')); // false
console.log(isValidIP('h.ola.ke.ase')); // false

console.log(isValidIP('12.255.56.1')); // true

/* OTRAS SOLUCIONES
🤣
const net = require('net');
const isValidIP = (s) => net.isIP(s);

function isValidIP(str) {
  var p = str.split('.');
  return p.length == 4 && p.every(function(s) {
    return /^\d+$/.test(s) && s >= 0 && s <= 255;
  });
}

function isValidIP(str) {
  const octets = str.split('.')             // Split into octets
  return (octets.length === 4) &&           // Ensure str has exactly 4 octets
    octets.reduce((acc, octet) =>           // Check all octets
      (acc === true) &&                       // Ensure prior octets okay
      (String(Number(octet)) === octet) &&    // Ensure octet has nothing funky like spaces, leading 0's, ...
      (Number(octet) >= 0) &&                 // Ensure octet is 0 or more
      (Number(octet) <= 255)                  // Ensure octet is 255 or less
    , true)
}

*/
