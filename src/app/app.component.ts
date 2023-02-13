import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jamshed-qureshi';
  framework: string = 'Angular';
  isJavascript: boolean = true;

  isCode(){
    if(this.isJavascript) return "Yes, it's a code."
    else return "Nope, it's a text."
  }
  
}