import { Component } from '@angular/core';
import { Card } from 'src/app/components/card/card';
import { Category } from 'src/app/components/category/category';

@Component({
  selector: 'app-products',
  imports: [Category, Card],
  templateUrl: './products.html'
})
export class Products {

}
