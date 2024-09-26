//clase Recibos
export class Invoice {
    //3 types public private readonly
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} debe ${this.amount}€. Motivo: ${this.details}`;
    }
}
