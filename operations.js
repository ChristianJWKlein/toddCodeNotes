const subtotal = 17.95;
const taxrate = 0.07;
const taxTotal = subtotal * taxrate;
const total = subtotal + taxTotal;
console.log("Your total is: " + total);

let age = 46;
age++;
console.log("Happy birthday! You are " + age);

/* ********************************* */

//Alternate Method by Todd.  Maybe by me.

// Given a subtotal and tax rate (7%)
// print out a complete receipt like:
//
// Subtotal     19.99
// Tax           1.39
// ------------------
// TOTAL        21.38

// 1. Declare variables
const mySubTotal = 19.99;
const myTaxRate = 0.07;

// 2. function to calc taxTotal (return subtotal * taxRate)
function calcTaxTotal(subtotal, taxRate) {
  return subtotal * taxRate;
}

// 3. create total from subtotal and taxTotal
const myTaxTotal = calcTaxTotal(mySubTotal, myTaxRate);
const myTotal = mySubTotal + myTaxTotal; // 19.99 + 1.3993 = 21.3893

// 4. print receipt

// Subtotal     19.99
console.log("Subtotal     ", mySubTotal.toFixed(2));
// Tax           1.39
console.log("Tax           ", myTaxTotal.toFixed(2));
// ------------------
console.log("------------------");
// TOTAL        21.38
console.log("TOTAL        ", myTotal.toFixed(2));
