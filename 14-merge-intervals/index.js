const mergeIntervals = (interval) => {
    const resultado = [...interval];
    //ordenar
    resultado.sort((a, b)=> {
        return a[0]-b[0] ;
    })
    
    for(let i = 0; i < (resultado.length-1); i++){

        if(resultado[i][1] >= resultado[i+1][0]) { // se solapan
            if (resultado[i+1][1] > resultado[i][1]) resultado[i][1] = resultado[i+1][1];
            
            resultado.splice(i+1,1);
            i--; // para volver a comparar el nuevo intervalo con el siguiente
        }
    }

    return resultado;
}
 
 
 
console.log(mergeIntervals([[1,4], [2,6], [8,10], [15,20]])); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 20 ] ]
console.log(mergeIntervals([[1,2], [2,7]])); //[ [ 1, 7 ] ]
console.log(mergeIntervals([[1,3], [4,7], [2,4], [6,9], [25,35], [12,15]]));