/***********************
 ***** Day 1 of 100 *****
 ************************/
// Q1: Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8,
  b = 6;
[a, b] = [b, a];

// Q2: Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Q3: Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
const half = ({ min, max }) => {
  return (min + max) / 2.0;
};
console.log(half(stats));

// Q4: Use an iterator method (any kind of loop) to get the desired output (shown below).
/*
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
-> failuresList should be an array containing result failure messages.
-> failuresList should be equal to the specified output.
-> Template strings and expression interpolation should be used.
-> An iterator should be used.
*/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}
const failuresList = makeList(result.failure);

// Q5: Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};

/***********************
 ***** Day 2 of 100 *****
 ************************/
// Q1: Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  // Concise function within object
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

// Q2: ES6 Class Syntax to Define a Constructor Function
class Vegetable {
  constructor(carrot) {
    this.name = carrot;
    return carrot;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// Q3: Getters and Setters in ES6 Class
// Program for getting temperature in degree Celsius
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  // setter
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/***********************
 ***** Day 3 of 100 *****
 ************************/
// Q1: Export to Share a Code Block in ES6
const uppercaseString = (string) => {
  return string.toUpperCase();
};
const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { uppercaseString, lowercaseString };

// Q2: Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from "./string_functions.js";
uppercaseString("hello");
lowercaseString("WORLD!");

// Q3: Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Q4: Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

/***********************
 ***** Day 4 of 100 *****
 ************************/
// Q1: Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {
  // Your code goes here.
});

/***********************
 ***** Day 5 of 100 *****
 ************************/
// Q1: Promise with resolve and reject methods
const serverRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

/***********************
 ***** Day 6 of 100 *****
 ************************/
// Q1: Handle a Fulfilled Promise with then
const fulfilledPromise = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
}).then((result) => {
  console.log(result);
});

/***********************
 ***** Day 7 of 100 *****
 ************************/
// Q1: Handle a Rejected Promise with catch
const rejectedPromise = new Promise((resolve, reject) => {
  let responseFromServer = false;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/***********************
 ***** Day 8 of 100 *****
 ************************/
// Q1: Test Method | It returns true if pattern find something
let myString = "Hello, World!";
let myRegex = /Hello/;
console.log(myRegex.test(myString));

// Q2: Match a Literal String with OR | operator in Regex
let petString = "James has a pet cat.";
let petRegex = /dog|bird|cat|fish/;
console.log(petRegex.test(petString));

// Q3: i flag will ignore case-sensitivity
let myString2 = "Hello, World";
let fccRegex = /world/i;
console.log(fccRegex.test(myString2));

/***********************
 ***** Day 9 of 100 *****
 ************************/
// Q1: Find actual matches with .match() method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
console.log(extractStr.match(codingRegex));

/***********************
 ***** Day 10 of 100 *****
 ************************/
// Q1: Find More Than the One Match with i and g flags
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
console.log(twinkleStar.match(starRegex));

// Q2: Match Anything with Wildcard Period . Dot character
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
console.log(unRegex.test(exampleStr));

// Q3: Match Single Character with Multiple Possibilities by Using Character Class []
let quote =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
console.log(quote.match(vowelRegex)); // Return array of 25 vowels

// Q4: Match Letters of the Alphabet with Hyphen - Character
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
console.log(quoteSample.match(alphabetRegex));

/***********************
 ***** Day 11 of 100 *****
 ************************/
// Q1: States in React Native
import { useState } from "react";
const App = () => {
  const [inputText, setInputText] = useState("");
  const handleTask = (txt) => {
    setInputText(txt);
  };
  const TextInputAttributes = {
    placeholder: "Add Task Here...",
    value: inputText,
  };
  return (
    <View style={styles.container}>
      <TextInput {...TextInputAttributes} onChangeText={handleTask} />
    </View>
  );
};
export { App };

/***********************
 ***** Day 12 of 100 *****
 ************************/
// Working on an other project

/***********************
 ***** Day 13 of 100 *****
 ************************/
// Working on an other project