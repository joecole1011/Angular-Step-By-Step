import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input () step:number = 1;
  counter:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  decrease(){
    console.log('Hey decrease');
    if(this.counter- this.step >= 0){
      this.counter = this.counter - this.step;
    }
  }
  increase(){
    if(this.counter + this.step <100){
      this.counter = this.counter + this.step ;
    }
  }
}
