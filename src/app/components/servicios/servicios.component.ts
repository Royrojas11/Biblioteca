import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  titulo2: String = "BIBLIOTECA DIGITAL ES UN PLATAFORMA DISEÑADA ESPECIALMENTE PARA BIBLIOTECAS PROVEEMOS RESULTADOS ACORDE A LAS NECESIDADES DE CADA INSTITUCIÓN CON INTERFAZ SENCILLA Y AMIGABLE.";
  titulo5: String="Servicios Especializados"
  constructor() { }

  ngOnInit(): void {
  }
  
}
