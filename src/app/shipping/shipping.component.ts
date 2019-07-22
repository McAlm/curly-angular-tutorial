import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  prices;
  constructor(
    private cartService: CartService
  ) {
    this.prices = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}