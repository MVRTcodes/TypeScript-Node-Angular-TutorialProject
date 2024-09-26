
import { Invoice } from './classes/Invoice.js'; 
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values : [string, string, number];

    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
    console.log(doc);
})

//enum

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

//Generics

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}

const docThree: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'yoshi' }
}

console.log(docTwo, docThree);

//interfaces

// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// }

// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }

//greetPerson(me);

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi','web work', 250);
// docTwo = new Invoice('mario', 'plumbling work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('Mario','work on the mario website', 300);
// const invTwo = new Invoice('Luigi','work on the luigi website', 250);

// let invoices: Invoice[] = [];

// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv =>{
//     console.log(inv.client, inv.amount, inv.format());
// })