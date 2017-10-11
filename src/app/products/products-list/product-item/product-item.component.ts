import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: 'product-item.component.html',
    styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
    
    @Input()
    nameOfProduct = 0;
    
}