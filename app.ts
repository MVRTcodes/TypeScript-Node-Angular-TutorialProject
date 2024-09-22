const character = 'luigi';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {

    console.log(input);

})

// arrays

let names = ['luigi','mario','yoshi'];

names.push('toad');
// names.push(33);
// names[0] = 2;

let numbers = [10,20,30,25];

numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';

let mixed = ['ken',4,'chunli',8,9]

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
}