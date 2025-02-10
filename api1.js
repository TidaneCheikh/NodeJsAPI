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