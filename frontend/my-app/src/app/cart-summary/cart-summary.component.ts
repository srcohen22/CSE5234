import { Component, OnInit } from '@angular/core';
import { CART } from './mock-cart';
import { Cart } from './cart-summary';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class SummaryComponent implements OnInit {

  cart = CART;
  displayedColumns: string[] = ['image','name','quantity','price', 'edit'];
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
    ) { }

  ngOnInit(): void {
  }

  delete(item: Cart){
    var temp_cart = this.cart
    this.cart = []
    var index = -1
    for(var i = 0; i < temp_cart.length; i++){
      if(temp_cart[i].name != item.name){
        this.cart.push(temp_cart[i])
      }
    }
    console.log(this.cart)
  }

}
