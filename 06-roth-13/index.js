const roth13Decipher = (text) => {
    const abecedario = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cifrado =    "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    let textoDescifrado = '';

    for (let letra of text) {
        let index = abecedario.indexOf(letra)
        if (index !== -1) {
            textoDescifrado += cifrado[index];
        } else {
            textoDescifrado += letra;
        }
    }
    return textoDescifrado;    
}


console.log(roth13Decipher('EBG13 rknzcyr.'));

/* OTRAS SOLUCIONES

function rot13(str) {
 var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return str.replace(/[a-z]/gi, c => a[b.indexOf(c)])
}

function rot13(str) {
  return str.split('').map(function(e) {
    return /[A-Ma-m]/.test(e) ? String.fromCharCode(e.charCodeAt(0) + 13) :
           /[N-Zn-z]/.test(e) ? String.fromCharCode(e.charCodeAt(0) - 13) : e;
  }).join('');
}



*/