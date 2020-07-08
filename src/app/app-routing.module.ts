import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PicoPlacaComponent} from "./component/pico-placa/pico-placa.component";

const routes: Routes = [
  {
    path: 'pico-placa', component: PicoPlacaComponent
  },
  {
    path: '**', redirectTo: 'pico-placa', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
