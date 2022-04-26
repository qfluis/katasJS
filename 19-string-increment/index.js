const incrementString = (strng) => {

    if (/\D/.test(strng[strng.length-1])) return strng+"1";
    
    let indexNum;
    for (let i = strng.length-1; i>=0; i--) {
        if (/\D/.test(strng[i])) {
            indexNum = i;
            break;
        }
    }

    let result = strng.substring(0, indexNum+1);
    const num = String(Number (strng.substring(indexNum+1)) + 1);
    const zeros = strng.length - (result.length + num.length);
    if (zeros >= 1 ){
        result += ("0".repeat(zeros)) + num;
    } else {
        result += num;
    }    
    
    return result;
}

console.log(incrementString('foo'));
console.log(incrementString('foobar23'));
console.log(incrementString('foo0043'));
console.log(incrementString('foo099'));
console.log(incrementString('foobar99'));


  /*
  Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

  */

/* REVISAR...
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
*/