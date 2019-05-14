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
  @Output() onEditar= new EventEmitter()

  data: Array<{}>
  public datos: string
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

// valor["titulo"]="Lentejitas"
// console.log(valor)
console.log("enviando desde listado")
this.onEditar.emit({datos:valor})
this.onRetornar.emit()
}



}
