import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  selectedParentProduct: string = '';
  products: string[] = ["Laptop", "Desktop", "Monitor", "Charger"];

  productSelected(product: string){
    this.selectedParentProduct = product;
  }
}
