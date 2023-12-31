import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SearchProductsPipe} from "./pipes/search-produits.pipe";
import { ProductSearchComponent } from './components/catalogue/product-search/product-search.component';
import {NgxsModule} from "@ngxs/store";
import {ProductState} from "./shared/states/product.state";
import {CartComponent} from "./components/cart/cart.component";

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ProductSearchComponent,
    CartComponent,
    SearchProductsPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([ProductState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
