const arr = [5, 8, 7, 12, 13, 17, 22];

function addUpEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(addUpEvens(arr));

//How I did it

const myArr = [5, 8, 7, 12, 13, 17, 22];

function addEven(arr) {
  let evenTotal = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenTotal += arr[i];
    }
  }
  console.log(evenTotal);
}

addEven(myArr);
