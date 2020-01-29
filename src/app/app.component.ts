import { Component } from '@angular/core';
import { lorem } from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  enteredText = '';

  generateText(){
    this.randomText = lorem.sentence();
    this.enteredText = ''
  }
 
  onType(text: string){
    this.enteredText = text;
  }

  comparison(letter, entered){
    if(!entered){
      return "black"
    }
   return letter == entered ? 'green' : 'red';
  }
  }
