import { Component } from '@angular/core';
import { counterState } from '../states/counter.status';
import { Store } from '@ngrx/store';
import { customIncrement } from '../states/counter.action';

@Component({
  selector: 'app-custom-value',
  templateUrl: './custom-value.component.html',
  styleUrls: ['./custom-value.component.scss']
})
export class CustomValueComponent {

  value!:number;

  constructor(private store: Store<{counter: counterState}>){

  }

  addNewValue(){
   this.store.dispatch(customIncrement({value:+this.value}))
  }

}
