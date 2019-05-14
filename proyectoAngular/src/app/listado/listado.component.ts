import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mostrar: boolean = true
  mostrarE:boolean=true
  tituloE:string=""
  descripcionE:string=""
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
itemE=[]
Modificar(valor){
this.itemE=valor
this.tituloE=this.itemE["titulo"]
this.descripcionE=this.itemE["descripcion"]
this.mostrarE=false

console.log("enviando desde listado")


}

Editar(valor){

this.itemE["titulo"]=this.tituloE
this.itemE["descripcion"]=this.descripcionE
this.mostrarE=true
}



}
