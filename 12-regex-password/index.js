const validate = (password) => {
    return /\w{6,}/.test(password) && !(/\W+/.test(password)) && /[a-z]+/.test(password) && /[A-Z]+/.test(password) && /[0-9]+/.test(password);
}

/*
return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(password);
- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number
- No acepta carácteres especiales...
*/

console.log(validate('djI38D55')); // true
console.log(validate('a2.d412')); // false

console.log(validate('!fdjn345')); // false
console.log(validate('jfkdfj3j')); // false
console.log(validate('123')); // false
console.log(validate('abc')); // false
console.log(validate('Password123')); // true
console.log(validate('fjd3IR9.;')); // false
