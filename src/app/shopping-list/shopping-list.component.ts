import { Component, OnInit } from '@angular/core';
import { Engridient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Array<Engridient> = [
    new Engridient('Apples', 5),
    new Engridient('Tomatos', 8),
  ];
  constructor() { }

  ngOnInit() {
  }

}
