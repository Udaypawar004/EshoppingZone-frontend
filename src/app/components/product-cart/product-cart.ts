import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-cart',
  imports: [CommonModule],
  templateUrl: './product-cart.html',
})
export class ProductCart {
  @Input() id: number = 0;
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() _quantity: number = 1;
  updatedPrice: number = 0;

  @Output() quantityChange = new EventEmitter<number>();

  constructor() {
    this.updatedPrice = this.price;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value < 1 ? 1 : value;
  }

  sendValue(quantity: number) {
    this.quantityChange.emit(quantity);
  }

  onIncrement() {
    this.quantity = this.quantity + 1;
    this.updatedPrice = this.quantity * this.price;
    this.sendValue(this.quantity);
  }

  onDecrement() {
    this.quantity = this.quantity - 1;
    this.updatedPrice = this.quantity * this.price;
    this.sendValue(this.quantity);
  }

  removeFromCart() {
    console.log('remove from cart clicked');
  }
}
