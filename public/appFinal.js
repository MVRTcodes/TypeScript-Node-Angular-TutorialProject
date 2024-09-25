"use strict";
// const anchor = document.querySelector('a')!;
// if(anchor){
//     console.log(anchor.href);
// }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//classes lesson 12
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'work on the mario website', 300);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'yoshi';
invTwo.amount = 500;
console.log(invOne, invTwo);
console.log(invoices);
