import { Component, Input } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent {

  
  @Input() personaje: Personaje;

  id_personaje:number = 1;

  personajes:Personaje[]=[];

  id_escenario:number = 1;

  escenarios:Personaje[]=[];

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.personajes[i] = new Personaje(i+1);
      
    }
  }

  antPj(){
    this.id_personaje--;
    if (this.id_personaje <= 0) {
      this.id_personaje = 5;
    }
  }  

  sigPj(){
    this.id_personaje++;
    if (this.id_personaje >= 6) {
      this.id_personaje = 1;
    }
  }

  antEs(){
    this.id_escenario--;
    if (this.id_escenario <= 0) {
      this.id_escenario = 5;
    }
  }  

  sigEs(){
    this.id_escenario++;
    if (this.id_escenario >= 6) {
      this.id_escenario = 1;
    }
  }
}
