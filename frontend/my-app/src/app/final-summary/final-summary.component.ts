import { Component, OnInit } from '@angular/core';
import { Foods } from '../food-list/foods'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-final-summary',
  templateUrl: './final-summary.component.html',
  styleUrls: ['./final-summary.component.css']
})
export class FinalSummaryComponent implements OnInit {

  subtotal = 0
  items = this.cartService.getItems();
  displayedColumns: string[] = ['image','name','quantity','price'];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subtotal = this.cartService.subtotal
  }


}
