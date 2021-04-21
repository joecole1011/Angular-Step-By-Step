import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Step-By-Step';
  
  testClick(){
      console.log('test EventBinding');
      
  }
  testNumberChange(value: number){
      console.log('testNumberChange from app action bar', value);
  }

  

  // ninjaName ='Naruto';
   
  // ninjaConsole(){ 
  //   //console.log('ninjaConsole');
  //   console.log('console ninjaName: ', this.ninjaName);
  // }
  // ChangeNinjaName(name: string){
  //   this.ninjaName = name
  // }


}
