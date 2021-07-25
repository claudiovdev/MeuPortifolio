import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { BodyComponent } from './components/template/body/body.component';
import { CalculadoraComponent } from './components/calculadora'
import { CalculadoraRoutes } from './components/calculadora/calculadora-routing.module';
import { ProjetosRoutes } from './components/projetos/projetos-routing-module';
import { ProjetosComponent } from './components/projetos/projetos.component';


const routes: Routes = [
  { path: "",
   component: BodyComponent,
  },
  { path: "calculadora",
   component: CalculadoraComponent,
  },
  { path: "projetos",
  component: ProjetosComponent,
 },
  ...CalculadoraRoutes,...ProjetosRoutes

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

