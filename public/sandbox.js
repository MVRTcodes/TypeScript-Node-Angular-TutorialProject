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
