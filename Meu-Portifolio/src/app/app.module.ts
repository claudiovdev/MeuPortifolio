import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BodyComponent } from './components/template/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculadoraModule } from './components/calculadora';
import { ProjetosComponent } from './components/projetos/projetos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ProjetosComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    CalculadoraModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
