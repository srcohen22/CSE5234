import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foods } from '../food-list/foods'
import { CartService } from '../cart.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class SummaryComponent implements OnInit {

  subtotal = 0
  displayedColumns: string[] = ['image','name','quantity','price', 'edit'];
  items = this.cartService.getItems();

  constructor(private cartService: CartService,private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.updateSubtotal()
  }

  updateSubtotal(){
    this.subtotal = this.cartService.subtotal
  }
  delete(item: Foods){
    this.cartService.removeFromCart(item)
    this.items = this.cartService.getItems()
    this.updateSubtotal()
    this.appComponent.updateCart()
  }

}
