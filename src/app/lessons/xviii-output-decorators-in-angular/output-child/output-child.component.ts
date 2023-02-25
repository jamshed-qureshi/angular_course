import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent {
  selectedChildProduct: string = '';
  products: string[] = ["Laptop", "Desktop", "Monitor", "Charger"];
  @Output() productSelected: EventEmitter<string> = new EventEmitter(); 

  childProductSelected(product: string){
    this.selectedChildProduct = product;
    console.log(this.selectedChildProduct);
    this.productSelected.emit(this.selectedChildProduct);
  }

}
