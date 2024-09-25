import { HasFormatter } from '../interfaces/HasFormatter.js';
export class Invoice implements HasFormatter {
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

