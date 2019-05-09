import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { EliminarComponent } from './eliminar/eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
