import { HasFormatter } from "../interfaces/HasFormatter.js";

// clase para crear la lista donde se mostrarán los pagos y los recibos realizados

// a partir de especificarle un ul, la clase crea un elemento li a partir de un objeto que utilize:
    // -la interfaz HasFormatter
    // - el tipo que es(recibo/pago)
    // - posición dentro de ul (principio o final)

export class ListTemplate {
    constructor( private container: HTMLUListElement ){}

    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');

        if(heading==='Invoice'){
            h4.innerText = 'Recibo';
        }else{
            h4.innerText = 'Pago';
        }
        
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos === 'start'){
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}