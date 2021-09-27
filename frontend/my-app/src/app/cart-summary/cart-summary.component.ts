import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foods } from '../food-list/foods'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class SummaryComponent implements OnInit {

  subtotal = 0
  displayedColumns: string[] = ['image','name','quantity','price', 'edit'];
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.updateSubtotal()
  }

  updateSubtotal(){
    this.subtotal = 0
    for(var i = 0; i < this.items.length; i++){
      this.subtotal += this.items[i].price
    }
  }
  delete(item: Foods){
    this.cartService.removeFromCart(item)
    this.items = this.cartService.getItems()
    this.updateSubtotal()
  }

}
