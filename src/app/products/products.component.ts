import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls : ['./products.component.css']
})
export class ProductsComponent {
    
    addProductAllowed = false;
    showDetails = false;
    productCreation = '';
    productName = '';
    products = ['Car','Doll'];
    logs = [];
    
    constructor() {
        setTimeout(() => {
            this.addProductAllowed = true;
        },4000)
    }
    
    addProduct() {
        
       this.products.push(this.productName);
       console.log(this.products);
       
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