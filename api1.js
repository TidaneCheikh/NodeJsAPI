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


 
const findNextSquare = (sq) => {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
};

function findEvenIndex(arr){
  const sumArray = (array) => array.reduce((sum, num) => sum + num, 0);
  for(let i=0;i<arr.length;i++){
    if(sumArray(arr.slice(0,i))==sumArray(arr.slice(i+1,arr.length))){
      return i
    }
  }
  return -1
  //Code goes here!
}