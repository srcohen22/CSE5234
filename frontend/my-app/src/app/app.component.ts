import { Component, } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  cart_total = this.cartService.getItems().length

  constructor(private cartService: CartService) { }
}
