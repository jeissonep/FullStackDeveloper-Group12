import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  mostrar: boolean = true
public titulo:string
public descripcion:string

  mostrarValor(event){

    console.log(event.datos)
  this.titulo=event.datos.titulo
  this.descripcion=event.datos.descripcion
  }
}
