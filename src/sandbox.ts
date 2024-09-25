// lesson 8

let greet: Function;

greet = () => {
    console.log('hello,again');
}

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

add(5,10,20);

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10,8);

//lesson 9

type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const l9greet = (user: ObjWithName) => {
    console.log(`${user.name} says hello`);
}


// lesson 10

// let l10greet: Function;

//example 1

let l10greet: (a: string, b: string) => void;

l10greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2

let l10calc: (a: number, b: number, c: string) => number;

l10calc = (numOne: number, numTwo: number, action: string) => {
    if (action == 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3

let l10logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

l10logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}