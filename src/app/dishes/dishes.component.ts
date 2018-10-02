import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DISHES } from '../mock-dishes';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes = DISHES;
  dish: Dish = {
    id: 1,
    name: "Kung Pao Chicken"
  }
  selectedDish: Dish;
  constructor() { }

  ngOnInit() {
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }
}
