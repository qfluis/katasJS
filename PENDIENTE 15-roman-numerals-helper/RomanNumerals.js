class RomanNumerals {
    static diccionario = [
        { roman: "I", num: 1 }, 
        { roman: "II", num: 2 }, 
        { roman: "III", num: 3 },
        { roman: "IV", num:4 },
        { roman: "V", num:5 },
        { roman: "VI", num:6 },
        { roman: "VII", num:7 },
        { roman: "VIII", num:8 },
        { roman: "IX", num:9 },
        { roman: "X", num:10 },
        { roman: "XX", num:20 },
        { roman: "XXX", num:30 },
        { roman: "XL", num:40 },
        { roman: "L", num:50 },
        { roman: "LX", num:60 },
        { roman: "LXX", num:70 },
        { roman: "LXXX", num:80 },
        { roman: "XC", num:90 },
        { roman: "C", num:100 },


    ]

    static toRoman(number) {
        return number;
    }

    static fromRoman(romanNum) {
        return romanNum;
    }
}

console.log(RomanNumerals.toRoman(1000));
console.log(RomanNumerals.fromRoman('M'));

/*

Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000



*/