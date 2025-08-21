import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { DarkModeToggleComponent } from '../DarkModeToggle/DarkModeToggle';
import { RouterLink } from '@angular/router';
import { Dropdown } from '../dropdown-use/dropdown.component';

@Component({
  selector: 'app-navbar',
  imports: [DarkModeToggleComponent, RouterLink, Dropdown],
  templateUrl: './navbar.html'
})
export class Navbar implements OnInit, OnDestroy {
  cartItemCount: number = 0;
  private cartSub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSub = this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

  ngOnDestroy() {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }
}
