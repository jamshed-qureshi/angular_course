import { Component } from '@angular/core';

@Component({
  selector: 'app-xv-template-variables-in-angular',
  templateUrl: './xv-template-variables-in-angular.component.html',
  styleUrls: ['./xv-template-variables-in-angular.component.css']
})
export class XVTemplateVariablesInAngularComponent {
  username: string = '';
  nameChanged(name: string){
    this.username = name;
  }
}
