import { Component } from '@angular/core';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html'
})
export class ProductAddComponent{
     
    addProductAllowed = false;
    productName = '';
    productDescription = '';
    
    addProduct() {
        alert(this.productDescription);
    }
    
    checkProduct() {
        
        if(this.productName.length >= 3){
            this.addProductAllowed = true;
            
        }else{
            this.addProductAllowed = false;
        }
        
    }
}