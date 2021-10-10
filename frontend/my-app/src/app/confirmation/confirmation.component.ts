import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule  } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  status=false;
  order_num='0';
  flag=true;
  items = this.cartService.items;
  arr:Array<string>=[];
  constructor(private http:HttpClient,private cartService: CartService) { }
  ngOnInit(): void {

      var url="https://bmvtz42mjf.execute-api.us-east-1.amazonaws.com/prod/todoitems?";
      for(var i = 0; i < this.items.length; i++){
        var item_name=this.items[i].name;
        var item_quantity=this.items[i].cart_quantity;
        var full_url=url+"item="+item_name+"&quantity="+item_quantity;
        this.http.get(full_url).subscribe(data => {
          var order_num=JSON.parse(JSON.stringify(data));
          if(order_num=='0')
          {
              this.status=false;
              return;
          }
          else
          {
            this.order_num=order_num;
            this.status=true;
          }
        });
      }
    }
}
