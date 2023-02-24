import { Component } from '@angular/core';

@Component({
  selector: 'app-xiii-ng-style-in-angular',
  templateUrl: './xiii-ng-style-in-angular.component.html',
  styleUrls: ['./xiii-ng-style-in-angular.component.css']
})
export class XIIINgStyleInAngularComponent {
  isStockAvailable: boolean = true;
  divColor = 'green';

  getDivColor(){
    return this.isStockAvailable ? 'green' : 'red';
  }
}
