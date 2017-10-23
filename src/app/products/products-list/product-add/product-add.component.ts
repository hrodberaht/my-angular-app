import { Component, Output, EventEmitter } from '@angular/core';

import { Product } from '../../product.model';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html'
})
export class ProductAddComponent{
    
    @Output() addProductEvent = new EventEmitter();
     
    addProductAllowed = false;
    productName: string = '';
    productPrice: number = 0;
    productDescription: string = '';
    productImgUrl: string = '';
    
    constructor() {
        
    }
    
    addProduct() {
        this.addProductEvent.emit(new Product(this.productName, this.productDescription, this.productPrice, this.productImgUrl));
        this.productName = '';
        this.productPrice = 0;
        this.productDescription = '';
        this.productImgUrl = '';
       
    }
    
    checkProduct() {
        
        if(this.productName.length >= 3 && this.productPrice.toString().length >= 2){
            this.addProductAllowed = true;
            
        }else{
            this.addProductAllowed = false;
        }
        
    }
}