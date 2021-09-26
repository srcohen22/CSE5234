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

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
