import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule  } from '@angular/common/http';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  status=false;
  wait=true;
  cart=true;
  order_num='0';
  items = this.cartService.items;
  cust_details=this.customerService.shipping
  payment_details=this.customerService.payment
  arr:Array<string>=[];
  constructor(private http:HttpClient,private cartService: CartService,private customerService: CustomerService) { }
  ngOnInit(): void {
    if(this.items.length>0)
    {
      var url="https://ztgm3rs36i.execute-api.us-east-1.amazonaws.com/prod/todoitems";
      this.http.post(url,{'items':this.items,'cust_detail':this.cust_details[this.cust_details.length-1],'payment_detail':this.payment_details[this.payment_details.length-1]}).subscribe(data => {
          var order_num=JSON.stringify(data);
          if(order_num!='0')
          {
            this.order_num=order_num;
            this.status=true;
            //this.cartService.clearCart();
          }
          this.wait=false;
        });
    }
    else{
      this.wait=false;
      this.cart=false;
    }
  }
}
