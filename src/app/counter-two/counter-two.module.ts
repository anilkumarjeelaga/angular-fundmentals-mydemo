import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { CounterOneModule } from '../counter-one/counter-one.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CounterHomeComponent],
  imports: [
    CommonModule,
    CounterOneModule,
    RouterModule
  ]
})
export class CounterTwoModule { }
