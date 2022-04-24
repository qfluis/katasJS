const validSolution = (board) => {
    let error = 0;
    // rows must sum 45
    for (let row of board){
        let suma = 0;
        for( let cell of row) {
            suma += cell;
        }
        if (suma !== 45) error++; 
    }
    // cols must sum 45
    for (let col = 0; col < 9; col ++){
        let suma = 0;
        for (let row = 0; row < 9; row++){
            suma += board[col][row];
        }
        if (suma !== 45) error++;
    }
    
    // cuadrantes suman 45...
    const comprobarCuadrante = (inicioFila, inicioColumna) => {
        let suma = 0;
        for (let row = inicioFila; row < (inicioFila+3); row++) {
            for (let col = inicioColumna; col < (inicioColumna + 3); col++){
                suma += board[col][row];                
            }
        }
        if (suma !== 45) error++;
    }
    comprobarCuadrante (0, 0);
    comprobarCuadrante (0, 3);
    comprobarCuadrante (0, 6);
    comprobarCuadrante (3, 0);
    comprobarCuadrante (3, 3);
    comprobarCuadrante (3, 6);
    comprobarCuadrante (6, 0);
    comprobarCuadrante (6, 3);
    comprobarCuadrante (6, 6);

    return (error === 0);  

}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ])); // true

  console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ])); // => false

/* false?
1 2 6 3 4 7 5 9 8
7 3 5 8 1 9 6 4 2
1 9 4 2 7 5 8 6 3
3 1 7 5 8 4 2 6 9
7 5 9 1 6 2 4 3 8
4 8 2 9 3 6 7 1 5
1 4 8 7 5 9 3 2 6
5 6 1 4 2 3 9 8 7
2 7 3 6 9 1 8 5 4
*/

/* false ?
1 2 3 4 5 6 7 8 9
2 3 1 5 6 4 8 9 7
3 1 2 6 4 5 9 7 8
4 5 6 7 8 9 1 2 3
5 6 4 8 9 7 2 3 1
6 4 5 9 7 8 3 1 2
7 8 9 1 2 3 4 5 6
8 9 7 2 3 1 5 6 4
9 7 8 3 1 2 6 4 5
*/

