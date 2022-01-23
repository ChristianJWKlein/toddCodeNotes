const tips = [5, 8, 13, 2, 14, 27, 9, 18];

function addUpTips(arrOfTips) {
  let total = 0;
  for (let i = 0; i < arrOfTips.length; i++) {
    total = total + arrOfTips[i];
  }
  return total;
}

console.log("Total tips: ", addUpTips(tips));

//How I did it.
//Below const. commented out b/c allready declraed above

//const tips = [5, 8, 13, 2, 14, 27, 9, 18];

function calcTips(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}

calcTips(tips);
