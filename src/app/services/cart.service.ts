import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Set<number> = new Set();
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  addToCart(id: number) {
    if (!this.cartItems.has(id)) {
      this.cartItems.add(id);
      this.cartItemCountSubject.next(this.cartItems.size);
      localStorage.setItem('cartItems', JSON.stringify(Array.from(this.cartItems)));
    }
  }

  getCartItemCount(): number {
    return this.cartItems.size;
  }

  getCartItems(): number[] {
    return Array.from(this.cartItems);
  }
}
