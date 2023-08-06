/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

//Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // code block
    return a + b;
}

let sum = addTwoNumbers(3, 5)
console.log(sum)

// -----------------------------------Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
}

let sum1 = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers(4, 6);
console.log(sum2)

// Implicit Returns

const saySomething = message => console.log(message); // if you have more than one parameter use ()
saySomething('Hello World')

const saySomething2 = () => console.log('Hello World 2')
saySomething2()

// Returning Multiple Lines
const returnMultipleLines = () => ( // multiple lines strings require parentheses ()
    `<p>
        This is a multiple line string!
    </p>`
)

console.log(returnMultipleLines());

// ------------------------------------SPREAD OPERATORS

// No spread operators
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log('first array', arr1);
console.log('second array', arr2);

//coping an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log('first array', arr3);
console.log('second array', arr4);

// Copying an object

let obj1 = {a: 1, b: 2, c:3};
let obj2 = {... obj1, d: 4};
let obj3 = {...obj1, b: 5};
console.log('first obj', obj1);
console.log('second obj', obj2);
console.log('third obj', obj3);

// copying only a part of an array/object

let arr5 = [... arr1, {...obj1}, ...arr3, 'x', 'Y', 'z'];
console.log('fifth array', arr5);

// ------------------------------------REST PARAMETER SYNTAX

// Regular function call

const sumAll = (a, b, c) => a + b + c;
let sumRest = sumAll(1, 2, 3);
console.log('Sum', sumRest);

// extra arguments are ignored

let sumRest2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('sumRest2', sumRest2)

// Function using rest...

const sumRest3 = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sumRest3Result = sumRest3(1, 2, 3, 4, 5, 6);
console.log('sumRest3', sumRest3Result);

// ------------------------------------REST PARAMETER SYNTAX

// Destructuring arrays
// Vanilla Js
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe);

// ES6 way
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

// Skipping (, ,)

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite); 
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta', 
    sarah: 'vegetarian',
    andrea: 'steak'
}

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);