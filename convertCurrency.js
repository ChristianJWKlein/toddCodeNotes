const usd = 95;

function convertUSDtoEuro(howEverManyDollarsIHave) {
  const euroToUsdConversionRate = 0.71;
  return howEverManyDollarsIHave * euroToUsdConversionRate;
}

const myEuros = convertUSDtoEuro(usd);

console.log(`${usd} USD is equivalent to ${myEuros} Euro`);

/* ************** */
//How I (CK) did it.
//In future will rewrite code to fetch the "live" conversion Rate.
//Below const. commented out b/c declared already above.

//const usd = 95;
function usdToAda(money) {
  const ada = 1.21 * money;
  console.log(` $${money} usd is equal to ${ada} ada`);
}
usdToAda(usd);
