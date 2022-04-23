const traductorMano = ( msg ) => {
    const messageArray = Array.from(msg);
    const memory = [0];
    let punteroMem = 0;
    const MIN_MEM = 0;
    const MAX_MEM = 255; 
    let resultado = '';
    const pilaBucles = [];
    
    const moverCursor = ( paso ) => {
        punteroMem += paso;
        if ( punteroMem >= memory.length ) {
            memory.push(0);
        } else if ( punteroMem < 0 ) {
            punteroMem = 0;
            memory.unshift(0);
        }
    }

    const incrementarValorMem = ( incremento ) => {
        memory[punteroMem] += incremento;
        
        if ( memory[punteroMem] > MAX_MEM ) {
            memory[punteroMem] = MIN_MEM;
        } else if (memory[punteroMem] < MIN_MEM) {
            memory[punteroMem] = MAX_MEM;
        }
    }
 
    const inicioBucle = () => {
        let end;        
        const encontrado = pilaBucles.map(bucle => bucle.start).indexOf(index);

        if ( encontrado !== -1 ) {
            end = pilabucles[encontrado].end;
        } else {
            let countAperturas = 0;
            let i = index;
            let finEncontrado = false;
            while ( i < messageArray.length && !finEncontrado ) {
                if ( messageArray[i] === '🤜' ) {
                    countAperturas++;
                }
                if ( messageArray[i] === '🤛' ) {
                    countAperturas--
                }
                if( countAperturas === 0 ){
                    finEncontrado = true;
                    end = i;
                }
                i++;
            }
        }

        if( memory[punteroMem] == 0 ) {
            index = end;  //sale del bucle
            if ( encontrado !== -1 ) {
                pilaBucles.pop();
            }
            return
        } else { // Añadir en pila de bucles
            if( encontrado === -1 ) {
                pilaBucles.push({
                    start:index,
                    end: end
                });
            }            
        }        
    }

    const finBucle = () => {
        if (memory[punteroMem] !== 0) {
            index = pilaBucles[pilaBucles.length-1].start;
        } else {
            pilaBucles.pop();
        }
    }

    const funciones = {
        '👉': () => { moverCursor(1); }, // moves the memory pointer to the next cell 
        '👈': () => { moverCursor(-1); }, // moves the memory pointer to the previous cell 
        '👆': () => { incrementarValorMem(1); }, // increment the memory cell at the current position  
        '👇': () => { incrementarValorMem(-1); }, // decreases the memory cell at the current position.  
        '🤜': () => { inicioBucle(); }, //if the memory cell at the current position is 0, jump just after the corresponding 🤛  
        '🤛': () => { finBucle(); }, //if the memory cell at the current position is not 0, jump just after the corresponding 🤜 
        '👊': () => { resultado += String.fromCharCode(memory[punteroMem]); } //Display the current character represented by the ASCII code defined by the current position. 
    }
    
    let index;
    for (index = 0; index < messageArray.length; index++) {
        let caracter = messageArray[index];
        funciones[caracter](index);
    } 
       
    return resultado;    
}

console.log ("1er Mensaje: ");
let res = traductorMano('👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊');
console.log(res);
console.log("2º Mensaje: ");
res = traductorMano('👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊');
console.log(res);