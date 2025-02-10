function multiplicationTable(size) {
  return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)));
}

function isLetterInArray(letter, array) {
  return array.includes(letter);
}

function numberToBinary(number) {
  return number.toString(2);
}

function sortArrayAscending(array) {
  return array.slice().sort((a, b) => a - b);
}

const isFloat = (number) => typeof number === "number" && number % 1 !== 0;

const iterateArray = (array) => {
  for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
  }
};

// Exemple d'utilisation
console.log(multiplicationTable(3));
console.log(isLetterInArray('a', ['a', 'b', 'c'])); // true
console.log(isLetterInArray('d', ['a', 'b', 'c'])); // false
console.log(numberToBinary(10)); // "1010"
console.log(sortArrayAscending([3, 1, 4, 1, 5, 9, 2, 6])); // [1, 1, 2, 3, 4, 5, 6, 9]
console.log(isFloat(10.5)); // true
console.log(isFloat(10)); // false
iterateArray([3, 1, 4, 1, 5, 9, 2, 6]);


function sumTwoSmallestNumbers(numbers) {  
  let array=numbers.slice().sort((a, b) => a - b);
  somme=0
  let count=0
  const isFloat = (number) => typeof number === "number" && number % 1 !== 0;
  for(let i=0; i<array.length ;i++){
    if(!isFloat(array[i])){
      somme+=array[i]
      count+=1
      console.log(count);
    }
    if(count==2){
      break
    }
  }
  return somme
 }