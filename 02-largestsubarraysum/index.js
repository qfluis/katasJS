const largestSubarraySum = (arrayNums, subarrayLength) => {
    let maxSum = null;
    let indexMaxSum = 0;

    for (let i = 0; i<= arrayNums.length-subarrayLength; i++) {
        let tmpSum = 0;
        for(let j = i; j < i+subarrayLength; j++){
            tmpSum += arrayNumbers[j];
        }
        if (tmpSum > maxSum || maxSum === null){
            maxSum = tmpSum;
            indexMaxSum = i;
        }             
    }    
   return arrayNums.slice(indexMaxSum, indexMaxSum + subarrayLength);
}


let arrayNumbers = [3,1,4,1,5,9,2,6];
console.log("Array: ", arrayNumbers);
console.log("Resultado: ", largestSubarraySum(arrayNumbers, 3) );

arrayNumbers = [23,10,14,55,15,9,42,6,33,10,25,33];
console.log("Array: ", arrayNumbers);
console.log("Resultado: ", largestSubarraySum(arrayNumbers, 5) );

arrayNumbers = [23,10,14,55,15,9,12,6,33,10,25,33,22,33,25,45,32,22,10,32,2,5];
console.log("Array: ", arrayNumbers);
console.log("Resultado: ", largestSubarraySum(arrayNumbers, 10) );