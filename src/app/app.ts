import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './services/DarkModeService';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EShoppingZone');
  private darkModeService = inject(DarkModeService);
 
  ngOnInit(): void {
    this.darkModeService.initTheme();
  }
}
