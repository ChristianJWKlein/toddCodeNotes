const students = [
  { name: "Megan", frustrated: true, age: 33 },
  { name: "Emil", frustrated: true, age: 32 },
  { name: "Malibu", frustrated: false, age: 19 },
  { name: "Christian", frustrated: true, age: 28 },
  { name: "Damian", frustrated: false, age: 36 },
  { name: "Zhopou", frustrated: true, age: 23 },
];

// we want to check if there is a frustrated student.  Using array method .some().  Checks to see if anything
//in array matches criteria we specify.  At least one.\

//check criteria with a callback function inside our method

//use an anonymous function to take value in array and

//If function is on oneline you Do not need cury braces.********** IMPORTANT.  Can leave off return. depends what you want.

//lokk at property of that student and see if they are frustrated.

const isAFrustratedStudent = students.some((student) => student.frustrated); // this will stop at Megan. and return a boolean.  Good to use if anyone at all is frustrated

//above is same as
//  (student) => {
//      const isFrustrated = student.frustrated
//      if(isFrustrated === true){
// return true
//      }else{
//          return false
//      }
//  }

const areAllFrustrated = students.every((student) => student.frustrated); // will return false b/c we have one false value. RETURNS BOOLEAN

const oneFrustratedStuent = students.find((student) => student.frustrated); // this will return a student who is frustrated as an object.  A SINGLE ELEMENT RETURNED ONLY.  retuns Megan.

//Now we want to find all of the students who match our search criteria b/c this is in same family as .find, .every, .some

//always returns an array that is a subset of original array.  If everything matches it returns same array.  if nothing happens we get an empty array.
const frustratedStudents = students.filter((student) => student.frustrated); // RETURNS ARRAY

console
  .log
  //isAFrustratedStudent
  //areAllFrustrated
  //oneFrustratedStuent,
  //frustratedStudents
  ();

//practice to find students of drinking age.  CK's Code

// const studentsWhoCanDrink = students.filter((student) => student.age >= 21);
// console.log("Here is a list of students who can drink: ", studentsWhoCanDrink);

const studentsWhoCanDrink = students.filter(
  (student) => student.age >= 21 && student.frustrated == false
);
//

//NOW WE BRING IN .forEach... forEach student...do this.

// students.forEach((student) => {
//   console.log("name: ", student.name);
//   console.log("age: ", student.age);
// });

//NOW we use these 3.....Powerful, simple, but be Weary...Learn when and how to use it.
//^^^^^.map^^^^^ Lets say someone wants a list of all the students names.  You want to give them the list without telling them age and if they are frustrated.  .map is used for changing the shape of an array.  shape will change to return an array that has just the name.  ALWAYS RETURNs an Array.  Always retuns an Array with the SAME Number of Elements.  Changes shape only.  You can also change and add things into the array  .filter will change to subset (new size)

const studentList = students.map((stud) => stud.name); // returns an array of strings with the "names"

//add in data with .map method..REALLY USEFUL
const estudiantesList = students.map((stud) => {
  return {
    name: stud.name,
    school: "Boca Code",
    term: "Winter 2022",
    course: "swecc 2022",
  };
}); // returns an array of objects with  "names", School, etc. We added in data.

//above could be done, LESS thoroughly with:
// let studentList1 = [];
// students.forEach((student) => {
//   studentList.push({});
// }); //also  returns an array of objects with  "names", School, etc. We added in data.

// ^^^^^^^easy to understand, pain in the butt to use some time.  Lets say we want an alphabetized list of our students.  We us ^^^^^^^^ .sort() ^^^^.  Returns a new array in whatever order you tell it too.  Gives you two arguments, (a,b).  returns +1 if you "a" to sort first and -1 if you want "b" to sort first.

const studentsAtoZ = students.sort((a, b) => {
  if (a.name < b.name) {
    return 1;
  }
  return -1;
});

//^^^^ THE ARRAY METHOD OF ARRAY METHODS ^^^^^ Takes a long time to get.  Eventually you may realize you can almost do anything with this array method.  Lets say we need to add up the ages of everyone in the array.  Look at this array and reduce it down into a single value.  Usually used for simple stuff.  When you SEE THE LIGHT of potential with .reduce(), let Todd know.

//Like.sort, takes two arugments..an accumulator and (array or object or function)... The accumulator starts with an initial value...in the below case it is "0".

//what we return each time inside the function, it will replace the accumulator value...So after runningn once, we return Megans Age Plus oroginal value = 33.  Next run we return Emil's age (30) plus last accumulator (33) to return 63... And sp on until it runs through the entire array or object.

//Going through an array, accumulating values through every element specified in object or array.  returns accumulation value.

//in a sense is just returning one thing... But

const sumOfAges = students.reduce((accumulator, stud) => {
  return stud.age + accumulator;
}, 0);

console.log(studentList, estudiantesList, studentsAtoZ, sumOfAges);
