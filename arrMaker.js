//create an array named "myArray" with desired length and filled with random numbers.
//Below code was made by me (CK) and metiquosly refined by Todd and Manny

function genArr(length) {
  const arr = [];
  for (let i = 0; i <= length; i++) {
    const myNum = Math.ceil(Math.random() * 100);
    arr.push(myNum);
  }
  return arr;
}

const myArray = genArr(25); //can take an additional two arguments. (length, ,)
console.log(myArray);

//Different and earlier version.  Manny and me
