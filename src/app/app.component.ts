import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onType(text){
    const randomText = document.querySelector('.randomText').innerHTML;
    const index = text.length -1;
  }
}
