import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DataService} from '../servicios/data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string=""
  contrasena: string=""
  mostrar: boolean = true
 titulo:string=""
 descripcion:string=""

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>()
  @Output() onEditar:EventEmitter<any>=new EventEmitter<any>()

  @Input() tituloV:string
  @Input() descripcionV:string

  constructor(private DataService:DataService) { }

  ngOnInit() {
    
  }

  capturarUsuario(value: string) {
    this.usuario = value
  }

  capturarContrasena(value: string) {
    this.contrasena = value
  }

  ingresar() {
    /* alert(this.usuario + " " + this.contrasena) */
    this.onLogin.emit()
  }

  grabar(){

    if(this.usuario=="" || this.contrasena==""){
    alert('Debe completar los datos antes de grabar')
    }else{
      this.DataService.Nuevo(this.usuario,this.contrasena)
      this.onLogin.emit()
    }     
  }

  regresar(){
    this.mostrar=!this.mostrar
   
  }
}
