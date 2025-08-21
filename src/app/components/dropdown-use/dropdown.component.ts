import { Component } from "@angular/core";
import { ZardDropdownModule } from "../dropdown/dropdown.module";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-dropdown",
    imports: [ZardDropdownModule, RouterLink],
    templateUrl: 'dropdown.component.html',
    styleUrl: 'dropdown.component.css'
})

export class Dropdown {

    isLoggedIn:boolean = false;

    onLogout() {
        console.log('Logout clicked');
    }
}