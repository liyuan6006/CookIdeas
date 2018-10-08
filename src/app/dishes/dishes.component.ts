import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import {DishService} from '../dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes:Dish[];

  constructor(private dishService :DishService) { }
  
  ngOnInit() {
    this.getDishes();
  }

  getDishes():void{
    this.dishService.getDishes().subscribe(dishes=>this.dishes=dishes);
  }
}
