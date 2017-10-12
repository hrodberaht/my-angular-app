import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductItemComponent } from './products/products-list/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RegistrationComponent} from './registration/registration.component';
import { BasketComponet } from './basket/basket.component';



@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    RegistrationComponent,
    BasketComponet
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
