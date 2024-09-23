"use strict";
// const character = 'luigi';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input);
// })
//lesson 4
// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(33);
// names[0] = 2;
let numbers = [10, 20, 30, 25];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
let mixed = ['ken', 4, 'chunli', 8, 9];
mixed.push(22);
mixed.push('ryu');
mixed[0] = 3;
//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: []
};
//lesson 5
//explicit types
let character;
let age;
let isLoggedIn;
age = 30;
isLoggedIn = true;
//arrays
let ninjas = [];
ninjas.push('shaun');
//union types
let mixed2 = [];
mixed2.push('hello');
mixed2.push(23);
mixed2.push(false);
console.log(mixed2);
let uid;
uid = '123';
uid = 123;
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
// lesson 6
let l6age = 25;
l6age = true;
console.log(l6age);
l6age = "hello";
console.log(l6age);
l6age = { name: 'luigi' };
console.log(l6age);
let l6ninja;
l6ninja = { name: 'yoshi', age: 25 };
console.log(l6ninja);
l6ninja = { name: 25, age: 'yoshi' };
console.log(l6ninja);
//lesson 7
// on tsconfig rootdir ./src outdir ./public "include": ["src"]
console.log("lesson 7 test");
