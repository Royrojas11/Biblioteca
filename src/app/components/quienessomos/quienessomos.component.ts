import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.scss']
})
export class QuienessomosComponent implements OnInit {
  titulo3:String ="Quienes Somos"
  titulo4:string ="Servicios Digitales "
  constructor() { }

  ngOnInit(): void {
  }

}
