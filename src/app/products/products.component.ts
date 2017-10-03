import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    
    addProductAllowed = false;
    productCreation = '';
    productName = '';
    products = ['Car','Doll'];
    
    constructor() {
        setTimeout(() => {
            this.addProductAllowed = true;
        },4000)
    }
    
   
    
    addProduct() {
       this.products.push(this.productName);
       console.log(this.products);
    }
    
} 