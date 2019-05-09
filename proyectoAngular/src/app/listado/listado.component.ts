import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mostrar: boolean = true
  @Output() onRetornar: EventEmitter<any> = new EventEmitter<any>()

  usuarios: Array<object> = [
    { username: "usuario 1", area: "area 1" },
    { username: "usuario 2", area: "area 2" },
    { username: "usuario 3", area: "area 3" }
  ]

  constructor() { }


  ngOnInit() {
  }

  Regresar() {
    /* alert(this.usuario + " " + this.contrasena) */
    this.onRetornar.emit()
  }


}
