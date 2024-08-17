import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() resultadoCreado= new EventEmitter<number>();
  valor1: number;
  valor2: number;
  //para no inicializar las variables, hay que configurar el tsconfig.json y ponerle lo del strict.
  //  "strictPropertyInitialization": false,


Sumar() {  

let resultado1 = this.valor1 + this.valor2;
this.resultadoCreado.emit(resultado1);
  }

}
