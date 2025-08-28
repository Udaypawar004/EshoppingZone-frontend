import { Component } from "@angular/core";
import { ZardDropdownModule } from "../dropdown/dropdown.module";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: "app-dropdown",
    imports: [ZardDropdownModule, RouterLink],
    templateUrl: 'dropdown.component.html',
    styleUrl: 'dropdown.component.css'
})

export class Dropdown {
    isLoggedIn: boolean = false;

    constructor(private router: Router) {
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
        }
    }

    onLogout() {
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
    }
}