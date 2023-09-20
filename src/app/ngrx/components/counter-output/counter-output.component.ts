import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../states/counter.status';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  conterStore: any;
  constructor(private store: Store<counterState>){
    
  }
  ngOnInit(){
    this.store.select('counter').subscribe((data:any)=>{
        this.conterStore = data.counter;
    })
  }
}
