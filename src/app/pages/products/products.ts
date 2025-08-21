import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from 'src/app/components/card/card';
import { Category } from 'src/app/components/category/category';

@Component({
  selector: 'app-products',
  imports: [Category, Card, CommonModule],
  templateUrl: './products.html'
})
export class Products {
  products = [
    { id: 0, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 0', description: 'Description 0', price: 50 },
    { id: 4, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 4', description: 'Description 4', price: 400 },
    { id: 5, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 5', description: 'Description 5', price: 500 },
    { id: 6, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 6', description: 'Description 6', price: 600 },
    { id: 7, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 7', description: 'Description 7', price: 700 },
    { id: 8, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 8', description: 'Description 8', price: 800 },
    { id: 9, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 9', description: 'Description 9', price: 900 },
    { id: 1, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 2', description: 'Description 2', price: 200 },
    { id: 3, image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png", title: 'Product 3', description: 'Description 3', price: 300 }
  ];
}
