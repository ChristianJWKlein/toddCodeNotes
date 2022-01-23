const arr = [5, 8, 7, 12, 13, 17, 22];

function filterJustEvens(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // check if element is even
      newArr.push(arr[i]); // put it in new array
    }
  }
  return sum;
}

console.log(filterJustEvens(arr));
