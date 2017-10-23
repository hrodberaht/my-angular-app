import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html'
})
export class ProductAddComponent{
    
    @Output() addProductEvent = new EventEmitter();
     
    addProductAllowed = false;
    productName = '';
    productDescription = '';
    
    constructor() {
        
    }
    
    addProduct() {
        alert(this.productName);
        this.addProductEvent.emit(this.productName);
       
    }
    
    checkProduct() {
        
        if(this.productName.length >= 3){
            this.addProductAllowed = true;
            
        }else{
            this.addProductAllowed = false;
        }
        
    }
}