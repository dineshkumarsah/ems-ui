import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from './ngrx.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/states/counter.reducer';
import { CustomValueComponent } from './components/custom-value/custom-value.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgrxComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomValueComponent
  ],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ]
})
export class NgrxModule { }
