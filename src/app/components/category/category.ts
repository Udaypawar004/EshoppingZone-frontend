import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [ CommonModule, FormsModule],
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
