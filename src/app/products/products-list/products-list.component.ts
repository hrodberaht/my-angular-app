import { Component } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls : ['./products-list.component.css']
})
export class ProductsListComponent {
    
    addProductAllowed = false;
    productName = '';
    
    products = ['Car','Doll'];
    
    showDetails = false;
    
    logs = [];
    
    
    constructor() {
        
    }
    
    addProduct() {
        
       this.products.push(this.productName);
       this.productName = '';
       console.log(this.products);
       this.addProductAllowed = false;
    }
    
    checkProductName() {
        
        if(this.productName.length >= 3){
            this.addProductAllowed = true;
            
        }else{
            this.addProductAllowed = false;
        }
        
    }
    
    onDetails() {
        
       this.showDetails = !this.showDetails;
        
    }
    
    onLogs() {
        
        this.logs.push(new Date());
        
    
    }
    
    getColor() {
        console.log()
    }
    
    
} 