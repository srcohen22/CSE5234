import { Injectable } from '@angular/core';
import { Foods } from './food-list/foods'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Foods[] = [];
  constructor() { }

  addToCart(food: Foods) {
    this.items.push(food);
  }

  removeFromCart(item: Foods) {
    var temp_cart = this.items
    console.log(item)
    this.items = []
    for(var i = 0; i < temp_cart.length; i++){
      if(temp_cart[i].name != item.name){
        this.items.push(temp_cart[i])
      }
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
