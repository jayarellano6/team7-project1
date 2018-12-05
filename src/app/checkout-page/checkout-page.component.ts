import { DataService } from './../data.service';
import { CartItem } from './../../cartitem.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  constructor(private data: DataService) { }
  cartItems: Array<CartItem> = [];
  total: number;
  //
  ngOnInit() {
    this.cartItems = JSON.parse(this.data.cart.getItem('cart'));
  }
  product(n1, n2) {
    return n1 * n2;
  }
  totalPrice() {
    this.cartItems.forEach(element => {
      this.total += this.product(element.amount, element.price);
    });
    return this.total;
  }
}
