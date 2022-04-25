# katasJS
Repo con fines educativos 🤓. 

Si tienes sugerencias de mejora del código me lo puedes indicar sin problema 🙂.

## Clase Poligonos Regulares - 2022-04-19
Clase que contiene varios métodos útiles si trabajamos con poligonos regulares.

Carpeta **01-poligonos-regulares**

## LargestSubarraySum - 2022-04-19
Dado un array de números enteros desordenados y un número **n**, encontrar el subarray con tamaño **n** que tenga la mayor suma.

Carpeta **02-largestsubarraysum**

## Create Phone Number - 2022-04-20
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```
Carpeta **03-codewars-phone-number**

## Sum of Digits / Digital Root - 2022-04-21
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```
Carpeta **04-codewars-sum-of-digits**
## Hand Challenge - 2022-04-23
You find a strange mirror that always shows a hand that is moving. 
The hand appears to be alive, and after a lot of questions of "yes" and "no" answer, you know that the hand is trying to teach you a program that is written in HPL (Hand Programming Language)...
*View more info in folder* **05-hand-challenge**.

## ROTH-13 - 2022-04-24
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.
Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.
Test examples:
```
"EBG13 rknzcyr." -->
"ROT13 example."

"This is my first ROT13 excercise!" -->
"Guvf vf zl svefg EBG13 rkprepvfr!"
```
*folder* **06-roth-13**.

## Nth Fibonacci - 2022-04-24
I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:
```
   nthFibo(4) == 2
```
Because 2 is the 4th number in the Fibonacci Sequence.
For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*folder* **07-n-th-fibonacci**.

## Value of X - 2022-04-24
Jack's teacher gave him a ton of equations for homework. The thing is they are all kind of same so they are boring.

So help him by making a equation solving function that will return the value of x.

Test Cases will be like this:
```
# INPUT            # RETURN
'x + 1 = 9 - 2'    # 6
'- 10 = x'         # -10
'x - 2 + 3 = 2'    # 1
'- x = - 1'        # 1
```
- All test cases are valid.
- Every +, - and numbers will be separated by space.
- There will be only one x either on the left or right.
- x can have a - mark before it.
- returned object will be a integer.

*folder* **08-value-of-x**.

## Convert number to reversed array of digits - 2022-04-25
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
```
348597 => [7,9,5,8,4,3]
0 => [0]
```
*folder* **09-number-2-reversed-array-digits**.

## Sudoku Solution Validator - 2022-04-25
Programa que chequea si un sudoku está correctamente solucionado.

*folder* **10-sudoku-solution-validator**.

## Anagrams array - 2022-04-25
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
```
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false
```
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
```
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```
*folder* **11-anagrams-array**.

## Regex password validator - 2022-04-25
You need to write regex that will validate a password to make sure it meets the following criteria:
- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number
Valid passwords will only be alphanumeric characters.
*folder* **12-regex-password**.

## Domain name - 2022-04-25
Obtener el nombre de dominio de una url.
*folder* **13-domain-name**.