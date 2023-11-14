import { Component } from '@angular/core';
import {Product} from "../../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  addedProducts: Product[];
}
