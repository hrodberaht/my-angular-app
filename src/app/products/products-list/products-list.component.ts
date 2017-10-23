import { Component } from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls : ['./products-list.component.css']
})
export class ProductsListComponent {
    
    products: Product[] = [
        new Product('Peanat','OK',12.15 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzYQWadS4OrcDrqaQB5i-rhMJs-bHS_PDnJcatG_mUwbSJnqO')
        ];
    
    showDetails = false;    
    
    logs = [];
    
    
    constructor() {
        
    }
    
    handleAddProductEvent(name) {
        this.products.push(name)
        console.log(name);
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