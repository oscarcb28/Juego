import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-descripcion1',
  templateUrl: './descripcion1.component.html',
  styleUrls: ['./descripcion1.component.css']
})
export class Descripcion1Component {
  
  @Input() personaje: Personaje;
 


}
