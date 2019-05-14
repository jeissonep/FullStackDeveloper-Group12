import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

onCambio:EventEmitter<Array<{}>>=new EventEmitter<Array<{}>>()
onListar:EventEmitter<{}>=new EventEmitter<{}>()

Lrecetas:Array<{}>

private recetas:Array<{}> = [
  {titulo:"Arroz con Pato",descripcion:"Comida Norteña"},
  {titulo:"Pachamanca",descripcion:"Comida del Centro"},
  {titulo:"Rocoto Relleno",descripcion:"Comida del sur"},
  {titulo:"Tacacho con cecina",descripcion:"Comida de la selva"}
]

Listar():Array<{}>{
return this.recetas
}

Eliminar(indice:number):void{
  if(confirm("¿Esta seguro que desea eliminar?")){
    this.recetas.splice(indice,1)
    console.log("Se elimino Correctamente")
  }
  this.onCambio.emit(this.recetas)

}

Editar(indice:number,tituloM:string,descripcionM:string):void{
  this.recetas[indice]["titulo"]=tituloM
  this.recetas[indice]["descripcion"]=descripcionM
  this.onCambio.emit(this.recetas)
  console.log("Se modificó correctamente con los dato: " + tituloM + " y " + descripcionM)
  }


Nuevo(tituloN:string,descripcionN:string):void{


  this.recetas.push({titulo:tituloN,descripcion:descripcionN})
  console.log("Se agrego correctamente con los dato: " + tituloN + " y " + descripcionN)
}


  constructor() { }
}