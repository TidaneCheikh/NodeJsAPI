let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr.length = 5; // return length back
console.log( arr);
