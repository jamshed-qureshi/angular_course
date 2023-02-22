import { Component } from '@angular/core';

@Component({
  selector: 'app-xi-ng-for-in-angular',
  templateUrl: './xi-ng-for-in-angular.component.html',
  styleUrls: ['./xi-ng-for-in-angular.component.css']
})
export class XINgForInAngularComponent {
  product: string = "";
  products : string[] = [];

  addProduct(){
    this.products.push(this.product);
    this.product = '';
    console.log(this.products);
  }
}
