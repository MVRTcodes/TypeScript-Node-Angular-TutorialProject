//clase Pagos
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} le deben ${this.amount}€. Motivo: ${this.details}`;
    }
}
