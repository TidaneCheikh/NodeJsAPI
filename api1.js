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

function buyUpgrade(index) {
  if (score >= upgrades[index].cost) {
    score -= upgrades[index].cost;
    clickPower += upgrades[index].power;
    upgrades[index].cost *= 2; // Augmente le prix après achat
    updateScore();
    displayUpgrades();
  } else {
    alert("Pas assez de points !");
  }
}

// Initialisation du jeu
updateScore();
displayUpgrades();

// Création du canvas pour le jeu
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.width = 400;
canvas.height = 400;

const box = 20; // Taille d'un bloc
let snake = [{ x: 10 * box, y: 10 * box }]; // Position de départ
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
let direction = "RIGHT";
let score = 0;

// Contrôles du jeu
document.addEventListener("keydown", event => {
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

// Fonction pour dessiner le jeu
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dessiner la nourriture
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Dessiner le serpent
  ctx.fillStyle = "lime";
  snake.forEach((segment, index) => {
    ctx.fillRect(segment.x, segment.y, box, box);
    if (index === 0) {
      ctx.strokeStyle = "black";
      ctx.strokeRect(segment.x, segment.y, box, box);
    }
  });

  // Déplacer le serpent
  let newX = snake[0].x;
  let newY = snake[0].y;

  if (direction === "UP") newY -= box;
  if (direction === "DOWN") newY += box;
  if (direction === "LEFT") newX -= box;
  if (direction === "RIGHT") newX += box;

  // Vérifier si le serpent mange la nourriture
  if (newX === food.x && newY === food.y) {
    score++;
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
  } else {
    snake.pop(); // Retire la dernière partie du corps
  }

  // Ajoute la nouvelle tête
  let newHead = { x: newX, y: newY };

  // Vérifier la collision avec le mur ou lui-même
  if (newX < 0 || newX >= canvas.width || newY < 0 || newY >= canvas.height || collision(newHead, snake)) {
    clearInterval(game);
    alert("Game Over! Score: " + score);
    return;
  }

  snake.unshift(newHead);

  // Affichage du score
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

// Vérifier si le serpent se mord lui-même
function collision(head, array) {
  return array.some(segment => segment.x === head.x && segment.y === head.y);
}

// Lancer le jeu
let game = setInterval(draw, 100);

