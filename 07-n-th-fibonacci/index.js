const nthFibo = (n) => {
    if (n === 1) return 0;
    if (n === 2) return 1;
    let a = 0;
    let b = 1;
    
    for (i = 2; i < n; i++) {
        [a,b] = [b, a + b]
    }

    return b;
}

const nthFiboRecursiva = (n) => {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return nthFiboRecursiva(n-1) + nthFiboRecursiva(n-2);
}

console.time("bucle");
for (let i=1; i <= 25; i++){
    console.log({posicion: i, numero: nthFibo(i)});
}
console.timeEnd("bucle");

console.time("recursiva");
for (let i=1; i <= 25; i++){
    console.log({posicion: i, numero: nthFiboRecursiva(i)});
}
console.timeEnd("recursiva");