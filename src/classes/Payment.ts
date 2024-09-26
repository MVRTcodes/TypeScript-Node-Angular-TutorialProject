import { HasFormatter } from "../interfaces/HasFormatter";

//clase Pagos

export class Payment implements HasFormatter {

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.recipient} le deben ${this.amount}€. Motivo: ${this.details}`
    }
}