import { Component, OnInit } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  receta: IReceta = { titulo: "", descripcion: "" }

  constructor(private dataService:DataService) {


   }

  ngOnInit() {

    this.dataService.subjet.subscribe((recetas:IReceta)=>{
      this.receta=recetas
    })
  }

  guardar(){
    this.dataService.onFinalizar.next(2)
  }

}
