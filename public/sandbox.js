"use strict";
// lesson 8
let greet;
greet = () => {
    console.log('hello,again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 8);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const l9greet = (user) => {
    console.log(`${user.name} says hello`);
};
// lesson 10
// let l10greet: Function;
//example 1
let l10greet;
l10greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let l10calc;
l10calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let l10logDetails;
l10logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
