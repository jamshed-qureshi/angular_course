import { Component } from '@angular/core';

@Component({
  selector: 'app-vii-event-binding',
  templateUrl: './vii-event-binding.component.html',
  styleUrls: ['./vii-event-binding.component.css']
})
export class VIIEventBindingComponent {
  
  divClicked(){
    console.log("**********");
    console.log("DIV Clicked !!");
  }

  buttonClicked(){
    console.log("**********");
    console.log("Button Clicked !!");
  }

  inputChanged(event: any){
    console.log(event.target.value)
  }

  enterkeypressed(){
    console.log("enter key is pressed !!")
  }

  selectionChanged(event: any){
    console.log("Selection Changed !!");
    console.log(event.target.value)
  }
}
