import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent, RouterLink],
  templateUrl: './home.html'
})
export class HomeComponent {
  
}
