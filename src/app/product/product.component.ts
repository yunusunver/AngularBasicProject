import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title:string ="Ürün Listesi";

  product:Product[] =[
    {id:1,name:"laptop",price:2500,categoryId:1,description:"asus zenbook",imageUrl:"https://cdn.pixabay.com/photo/2016/10/17/10/52/wind-farm-1747331_960_720.jpg"},
    {id:2,name:"mouse",price:25,categoryId:2,description:"a4 tech",imageUrl:"https://cdn.pixabay.com/photo/2016/03/09/16/50/city-street-1246870_960_720.jpg"}
  ]

  ngOnInit() {
  }

}
