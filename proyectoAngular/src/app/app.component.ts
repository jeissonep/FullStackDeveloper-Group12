import { Component } from '@angular/core';
import { DataService } from './servicios/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  mostrar: number = 1

  constructor(private dataService:DataService){
    this.dataService.onFinalizar.subscribe((valor)=>{
      this.mostrar=valor
      console.log(valor)
    })
  }
}
