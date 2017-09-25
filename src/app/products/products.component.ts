import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    
    addProductAllowed = false;
    productName = '';
    
    constructor() {
        setTimeout(() => {
            this.addProductAllowed = true;
        },4000)
    }
    
    onAlert(){
        alert("hello");
    }
    
    onUpdateProductName(event) {
       this.productName = event.target.value;
       console.log(event);
    }
    
} 