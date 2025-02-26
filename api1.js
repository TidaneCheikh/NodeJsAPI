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
   // array.push(Array(i+j).fill('*').join('') );
   function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
  }

function towerBuilders(nFloors) {
  let array = new Array(nFloors).fill(''); // Crée un tableau vide avec nFloors éléments

  for (let i = 0; i < nFloors; i++) {
    let stars = '*'.repeat(2 * i + 1); // Génère les étoiles (1, 3, 5, ...)
    let spaces = ' '.repeat(nFloors - i - 1); // Ajoute les espaces à gauche et à droite
    array[i] = spaces + stars + spaces; // Stocke la ligne complète dans le tableau
  }

  return array;
}
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function selectionSort(arr) {
  let n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }

      // Échanger les éléments
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// Exemple d'utilisation
let numbers = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers)); // [11, 12, 22, 25, 64]
