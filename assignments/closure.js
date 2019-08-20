// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function myName(name) {
  let counter = 0;
  counter += 1;
  console.log(`${counter}. My name is ${name}.`);

  return function favHobby(hobby) {
    counter += 1;
    console.log(`${counter}. My favorite hobby is ${hobby}.`);

    return function favFood(food) {
      counter += 1;

      console.log(`${counter}. My favorite food is ${food}.`);
    }; // favFood
  }; //hobby
} //myName

const greg = myName("Greg");
const gregHobby = greg("guitar");
const gregFavFood = gregHobby("steak & lobster");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = num => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!

  let count = 0;
  if (num > 100) {
    return counterLimit();
  } else return counter();

  function counterLimit() {
    return `Sorry, you have exceeded the counter limit`;
  }

  // 2- Declare a function `counter`. It should increment and return `count`.
  function counter() {
    return (count += num);
  }

  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
const myCounter = counterMaker(101); // 1
console.log(myCounter);
//myCounter(2); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
