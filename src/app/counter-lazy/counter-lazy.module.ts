import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CounterLazyRoutingModule } from './counter-lazy-routing.module';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { CounterOneModule  } from '../counter-one/counter-one.module';

@NgModule({
  declarations: [CounterHomeComponent],
  imports: [
    CommonModule,
    CounterLazyRoutingModule,
    CounterOneModule,
    FormsModule
  ]
})
export class CounterLazyModule { }
