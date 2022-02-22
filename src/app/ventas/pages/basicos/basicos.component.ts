import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "Alejandro";
  nombreUpper: string = "ALEJANDRO";
  nombreCompleto: string = "aLejanDro gArcIa";


  fecha: Date = new Date(); //el día de hoy

 

}
