const ipsBetween = (start, end) => {
    const NUM_DIR = 256;
    let dif = [];

    let arrS = start.split('.');
    let arrE = end.split('.');

    for (let i = 0; i < 4; i++) {
        dif[i] = Number(arrE[i]) - Number(arrS[i]);
    }

    let res = 0;
    for (let i = 0; i < 4; i++) {
        res += dif[i] * (NUM_DIR**(3-i));
    }
    
    return res;
}

console.log(ipsBetween('10.0.0.0', '10.0.0.50')); // => return   50
console.log(ipsBetween("10.0.0.0", "10.0.1.0")); // => return  256
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));  //=> return  246
console.log(ipsBetween('10.0.0.80', '10.0.1.79')); // 
console.log(ipsBetween('20.0.0.10', '20.0.1.0')); // 20.0.0.10, end = 20.0.1.0


/*

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them 
(including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be 
greater than the first one.

* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246

*/

/* OTRAS SOLUCIONES

function ipsBetween(start, end){
  const num = ip => ip.split('.')
                      .map(x => parseInt(x))
                      .reduce((acc, e) => acc * 256 + e);  
  
  return num(end) - num(start);
}

*/