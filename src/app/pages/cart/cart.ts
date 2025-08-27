import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCart } from 'src/app/components/product-cart/product-cart';


@Component({
  selector: 'app-cart',
  imports: [ProductCart, CommonModule, RouterLink],
  templateUrl: './cart.html'
})

export class Cart {
  constructor() {
    this.calculateOriginalPrice();
  }

  calculateOriginalPrice() {
    this.originalPrice = this.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    this.discountedPrice = this.roundToOneDecimal(this.originalPrice * 0.1);
    this.tax = this.roundToOneDecimal(this.originalPrice * 0.01);
    this.total = this.roundToOneDecimal((this.originalPrice - this.discountedPrice + this.storePickup + this.tax));
  }

  private roundToOneDecimal(value: number): number {
    return Math.round(value * 10) / 10;
  }

  originalPrice: number = 0;
  discountedPrice: number = 0;
  storePickup: number = 99;
  tax: number = 0;
  total: number = 0;

  onQuantityChange(productId: number, event: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.quantity = event;
      this.discountedPrice = this.roundToOneDecimal(this.originalPrice * 0.1); // Apply 10% discount and round to 1 decimal
      this.tax = this.roundToOneDecimal(this.originalPrice * 0.01); // Apply 10% tax
    }
    this.total = this.roundToOneDecimal((this.originalPrice - this.discountedPrice + this.storePickup + this.tax));
    this.calculateOriginalPrice();
  }

  products = [
    {
      id: 1,
      title: 'PC system All in One APPLE iMac (2023)',
      description: "some description",
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
      price: 1499,
      quantity: 1
    },
    {
      id: 2,
      title: 'Apple Watch Series 7',
      description: "some description",
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg',
      price: 399,
      quantity: 1.3
    }
  ];
}
