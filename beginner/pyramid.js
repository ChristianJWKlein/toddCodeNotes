/*Pyramid problem:
print:  (using a loop)
#
##
###
####
#####
*/

//What I did on 2nd day of code camp
let firstPound = "#";
let lastPound = firstPound;

console.log(`${firstPound} `);

for (let i = 0; i <= 5; i++) {
  console.log(`${lastPound} `);
  lastPound += firstPound;
}

//Simplified, generic method from Todd

let symbol = "#";
let line = symbol;
for (let i = 0; i < 5; i++) {
  console.log(line);
  line += symbol;
}
