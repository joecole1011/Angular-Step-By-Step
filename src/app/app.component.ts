import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Step-By-Step';
  ninjaName ='naruto';
   
  ninjaConsole(){ 
    console.log('ninjaConsole');
    
  }
}
