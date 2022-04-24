const valueOfX = (eq) => {
    eq = eq.trim();
    const arrElements = eq.split(' ');
    let signo = 1;
    let indexX, indexEqual;
    let signoX = 1;
    let resultado = 0;
    let signoOperadorDer = 1;

    arrElements.forEach((element, index) => {
        if(element === 'x') {
            indexX = index;
            if (signo === -1){
                signoX = -1;
                signo = 1;
            }
        }            
        if(element === '=') {
            indexEqual = index;
            signoOperadorDer = -1;
        }

        if(element === '-') {
            signo = -1;
        }
        if(element === '0') {
            signo = 1;
        }
 
        if(element !== 'x' && 
                element !== '=' && 
                element !== '+' && 
                element !== '-' &&
                element !== '0') {
        
            resultado += parseInt(element) * signo * signoOperadorDer;
            signo = 1;
        }     
    }); 
    
    if(indexX < indexEqual) resultado = -resultado;
    
    return resultado * signoX;        
} 

console.log(valueOfX('x + 1 = 9 - 2')); // 6
console.log(valueOfX('- 10 = x')); //-10
console.log(valueOfX('x - 2 + 3 = 2')); // 1
console.log(valueOfX('- x = - 1')); // 1
console.log(valueOfX('x + 0 = - 109 - 116')); // -225 
console.log(valueOfX('x - 28 - 118 = - 6 + 132')); // 272  
console.log(valueOfX('x + 0 - 144 = - 42 + 40 - 42')); // 100
console.log(valueOfX('x - 126 + 48 + 100 = + 48 + 35 - 111 ')); // x - 126 + 48 + 100 = + 48 + 35 - 111 // -50


