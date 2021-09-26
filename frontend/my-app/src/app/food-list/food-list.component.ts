import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Foods } from './foods';
import { FOOD } from './mock-foods'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Output() updateCart = new EventEmitter();

  food = FOOD;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  

  increase(food: Foods): void {
    for(var i = 0; i < this.food.length; i++){
      if(this.food[i].name == food.name){
        this.food[i].temp_quantity += 1;
      }
    }
  }

  decrease(food: Foods): void {
    for(var i = 0; i < this.food.length; i++){
      if(this.food[i].name == food.name && this.food[i].temp_quantity > 0){
        this.food[i].temp_quantity -= 1;
      }
    }
  }

  addToCart(food: Foods): void {
    this.cartService.addToCart(food);
    window.alert("Added!");
  }
}
