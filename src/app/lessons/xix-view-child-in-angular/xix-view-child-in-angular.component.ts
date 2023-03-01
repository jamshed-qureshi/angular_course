import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-xix-view-child-in-angular',
  templateUrl: './xix-view-child-in-angular.component.html',
  styleUrls: ['./xix-view-child-in-angular.component.css']
})
export class XIXViewChildInAngularComponent {
  @ViewChild('username') inputUsername!: ElementRef;
  name: string = '';

  usernameChanged(){
     this.name = this.inputUsername.nativeElement.value;
  }
}
