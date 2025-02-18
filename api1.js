function multiplicationTable(size) {
  return [...Array(size)].map((_, i) =>
    [...Array(size)].map((_, j) => (i + 1) * (j + 1))
  );
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
  let array = numbers.slice().sort((a, b) => a - b);
  somme = 0;
  let count = 0;
  const isFloat = (number) => typeof number === "number" && number % 1 !== 0;
  for (let i = 0; i < array.length; i++) {
    if (!isFloat(array[i])) {
      somme += array[i];
      count += 1;
      console.log(count);
    }
    if (count == 2) {
      break;
    }
  }
  return somme;
}

const findNextSquare = (sq) => {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
};

function findEvenIndex(arr) {
  const sumArray = (array) => array.reduce((sum, num) => sum + num, 0);
  for (let i = 0; i < arr.length; i++) {
    if (sumArray(arr.slice(0, i)) == sumArray(arr.slice(i + 1, arr.length))) {
      return i;
    }
  }
  return -1;
  //Code goes here!
}

function findOdd(A) {
  const countOccurrences = (array, element) =>
    array.filter((item) => item === element).length;
  //happy coding!
  let findindex = 0;
  let tem = 0;
  for (let i = 0; i < A.length; i++) {
    if (countOccurrences(A, A[i]) % 2 != 0 && countOccurrences(A, A[i]) > tem) {
      tem = countOccurrences(A, i);
      findindex = A[i];
    }
  }
  return findindex;
}
const findOutlier = (array) => {
  const evens = array.filter(num => num % 2 === 0);
  const odds = array.filter(num => num % 2 !== 0);
  return evens.length === 1 ? evens[0] : odds[0];
};

/*function findOutlier(ints) {
  return ints.slice(0, 3).reduce((a, b) => b % 2 === 0? a : a + 1, 0) >= 2?
    ints.find(i => i % 2 === 0) : ints.find(i => i % 2 !== 0);
}*/

function arrayDiff(a, b) {
  let arr2=[];
  for(let i=0;i<a.length;i++){
    if(!b.includes(a[i])){
      arr2.push(a[i])
    }
  }
  return arr2
}
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
function spinWords(string){
  let arr=string.split(" ")
  for(let i=0;i<arr.length;i++){
    if(arr[i].length>=5){
      arr.splice(i,1,arr[i].split('').reverse().join(''))
    }
  }
  return arr.join(" ")
}


function count(string) {
  let arr={}
  const countOccurrences = (array, element) =>
    array.filter((item) => item === element).length
  for (let i =0;i<string.length;i++){
      arr[`${string[i]}`]=countOccurrences(string.split(""), string[i])
  }
  // TODO
  return arr;
}




function towerBuilder(nFloors) {
  array =[]
  array.push(Array(2).fill(`${Array(nFloors-1).join(' ') }*${Array(nFloors-1).join(' ') }`).join('') );
  let j=2;
  for (let i = 1; i < nFloors;i++ ) {
   // array.push(Array(i+j).fill('*').join('') );
    array.push(Array(i+j).fill(`${Array(nFloors-i).fill(' ').join('') }*${Array(nFloors-i).fill(' ').join('') }`).join('') );
    j=j+1

  }
  // build here
  return array
}

console.log(towerBuilder(6));
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
