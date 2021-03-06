import { Injectable } from '@angular/core';
import { Foods } from './food-list/foods'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Foods[] = [];
  subtotal = 0;
  constructor() { }

  addToCart(food: Foods) {
    //check if already in cart
    var found = false
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].name == food.name){
        //update cart total
        this.items[i].cart_quantity += food.temp_quantity
        found = true
      }
    }

    if(!found){
      food.cart_quantity = food.temp_quantity
      this.items.push(food);
    }
    this.subtotal += (food.temp_quantity * food.price)
  }

  removeFromCart(item: Foods) {
    var temp_cart = this.items
    console.log(item)
    this.items = []
    for(var i = 0; i < temp_cart.length; i++){
      if(temp_cart[i].name != item.name){
        this.items.push(temp_cart[i])
      } else {
        this.subtotal -= item.cart_quantity*item.price
      }
    }
  }

  getItems() {
    return this.items;
  }

  getTotalItems(){
    let sum=0;
    for(var i = 0; i < this.items.length; i++){
        sum+=this.items[i].cart_quantity;
    }
    return sum;
  }

  clearCart() {
    this.items = [];
    this.subtotal = 0;
    return this.items;
  }

}
