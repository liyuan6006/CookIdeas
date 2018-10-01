import { Component, OnInit } from '@angular/core';
import {Dish} from '../dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dish:Dish={
    id:1,
    name:"Kung Pao Chicken"
  }

  constructor() { }

  ngOnInit() {
  }

}
