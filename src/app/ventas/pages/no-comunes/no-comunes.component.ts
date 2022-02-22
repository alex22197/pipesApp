import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Alejandro";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string [] = ['Maria', 'Pedro', 'Juan', 'Sergio', 'Laura'];
  clientesMapa= {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    if(this.genero === 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Laura';
    }
    else if(this.genero === 'femenino'){
      this.genero = 'masculino';
      this.nombre = 'Alejandro'
    }

  }

  borrarCliente() {
    this.clientes.pop();
  }


  //KeyValue Pipe

  persona = {
    nombre: 'Alejandro',
    edad: 25,
    direccion: 'Madrid, España'
  }


  //Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];


  //Async Pipe

  miObservable = interval(2000).pipe(tap(() => console.log('Intervalo'))); //0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data de promesa');
    }, 3500);
  })

  


}
