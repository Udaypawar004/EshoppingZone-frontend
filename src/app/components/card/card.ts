import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  constructor(private cartService: CartService) {}

  @Input() id: number = 0;
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;

  
  addToCart(id: number) {
    this.cartService.addToCart(id);
  }
}
