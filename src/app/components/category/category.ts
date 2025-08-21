import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZardCheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [ZardCheckboxComponent, FormsModule, CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {
  
  categories = [
    {name: "Electronic", checked: false},
    {name: "Fashion", checked: false},
    {name: "Garments", checked: false},
    {name: "Mobiles", checked: false},
    {name: "Headphones", checked: false}
  ];
}
