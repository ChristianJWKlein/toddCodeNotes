// Include fs module
const fs = require("fs");
const { readFile } = require("fs/promises");

(async function () {
  try {
    const data = await fs.readFileSync("./input.dat");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();

fs.readFile("./input.dat", (err, data) => {
  console.log(data);
});

readFile("./input.dat")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
