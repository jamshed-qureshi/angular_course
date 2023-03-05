import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'view-children-child',
  template: '<div>{{ product }}</div>'
})
export class ViewChildrenChildComponent {
  @Input() product: string = '';
}

@Component({
  selector: 'app-xx-view-children-in-angular',
  templateUrl: './xx-view-children-in-angular.component.html',
  styleUrls: ['./xx-view-children-in-angular.component.css']
})
export class XXViewChildrenInAngularComponent {
  @ViewChildren("product") products!: QueryList<ElementRef>;
  @ViewChildren(ViewChildrenChildComponent) childProducts!: QueryList<ViewChildrenChildComponent>;

  getProducts(){
    this.products.toArray().forEach(product => {
      console.log(product.nativeElement.innerText);
      product.nativeElement.innerText = 'Jamshed';
    })

    this.childProducts.toArray().forEach(product => {
      console.log(product.product);
      product.product = "Jamshed";
    })
  }
}
