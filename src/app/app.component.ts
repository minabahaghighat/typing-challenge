import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typying-challenge';
  randomText='';
inputText='';

  constructor(){
     this.randomText = faker.lorem.sentence()
  }


  onChangeInput(text:string){
    this.inputText=text;
      
  }

  compare(letterRandom :string,letterUser:string) :string{
    if(!letterUser){
      return "pending"
    }else if(letterRandom==letterUser){
      return "currect"

    }else{
      return "incurrect"
    }

  }

}
