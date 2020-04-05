import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterHomeComponent } from '../counter-lazy/counter-home/counter-home.component';

const routes: Routes = [
  { path: '' , component:CounterHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterLazyRoutingModule { }
