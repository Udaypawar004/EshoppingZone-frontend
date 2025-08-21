import { Component } from '@angular/core';
import { DarkModeToggleComponent } from '../DarkModeToggle/DarkModeToggle';
import { RouterLink } from '@angular/router';
import { Dropdown } from '../dropdown-use/dropdown.component';

@Component({
  selector: 'app-navbar',
  imports: [DarkModeToggleComponent, RouterLink, Dropdown],
  templateUrl: './navbar.html'
})
export class Navbar {
}
