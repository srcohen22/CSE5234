import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Foods } from './foods';
import { FOOD } from './mock-foods'
import { CartService } from '../cart.service'
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  
  @Output() updateCart = new EventEmitter();

  food = FOOD;

  constructor(private cartService: CartService,private appComponent: AppComponent, private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://wk3qzq2p04.execute-api.us-east-1.amazonaws.com/prod/inventory-management").subscribe(result => {
      var data = Object.values(result)
      this.food = []
      for(var i = 0; i < data.length; i++){
        this.food.push((data[i]));
      }
    })
  }
  

  increase(food: Foods): void {
    for(var i = 0; i < this.food.length; i++){
      if(this.food[i].name == food.name){
        this.food[i].temp_quantity = ((this.food[i].temp_quantity+1)||1);
      }
    }
  }

  decrease(food: Foods): void {
    for(var i = 0; i < this.food.length; i++){
      if(this.food[i].name == food.name && this.food[i].temp_quantity > 0){
        this.food[i].temp_quantity = ((this.food[i].temp_quantity-1)||0);
      }
    }
  }

  addToCart(food: Foods): void {
    if(food.temp_quantity > 0){
      this.cartService.addToCart(food)
      this.appComponent.updateCart()
    }
  }
}

