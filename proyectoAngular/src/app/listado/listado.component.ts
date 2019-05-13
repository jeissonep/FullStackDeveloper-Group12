import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mostrar: boolean = true
  @Output() onRetornar: EventEmitter<any> = new EventEmitter<any>()


  data: Array<{}>

  constructor(private dataService: DataService) { }


  ngOnInit() {

    this.data=this.dataService.Listar()
    
    this.dataService.onCambio.subscribe(  
     elementos => this.data = elementos

    )

  }

  Regresar() {
 
    this.onRetornar.emit()
  }
Eliminar(valor){

  this.dataService.Eliminar(valor)
}

Modificar(valor){
  this.dataService.Editar(valor,"Picante de Cuy","Comida del Norte")
//   this.dataService.ListarReceta(valor)
// this.dataService.onListar.subscribe(
//   elementos => this.data = elementos
// )
// alert(this.data[0])
}


}
