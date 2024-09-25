// const anchor = document.querySelector('a')!;

// if(anchor){
//     console.log(anchor.href);
// }

// console.log(anchor.href);

// const form = document.querySelector('form')!;


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})

//classes lesson 12

class Invoice {
    //3 types public private readonly
    // readonly client: string;
    // private details: string;
    // public amount: number;
    
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Mario','work on the mario website', 300);
const invTwo = new Invoice('Luigi','work on the luigi website', 250);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format());
})