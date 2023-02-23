import { Component } from '@angular/core';

@Component({
  selector: 'app-xii-ng-class-in-angular',
  templateUrl: './xii-ng-class-in-angular.component.html',
  styleUrls: ['./xii-ng-class-in-angular.component.css']
})
export class XIINgClassInAngularComponent {
  isStockAvailable: boolean = true;

  stockCheck(){
    return this.isStockAvailable ? 'bg-success' : 'bg-danger';
  }
}
