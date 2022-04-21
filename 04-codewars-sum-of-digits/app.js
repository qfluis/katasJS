digital_root = (n) => {
    n = Math.abs(n);
    if (n < 10 ) return n;

    let result = 0;
    const arrayNums = (n+'').split('');
    for (number of arrayNums) {
        result += parseInt(number);
    }
    return digital_root(result);
}

console.log(digital_root(16));
console.log(digital_root(123456));

/* SOLUCIONES CODE WARS

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

*/