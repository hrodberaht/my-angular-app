import { Component } from "@angular/core";

@Component({
    selector: "app-registration",
    templateUrl: "registration.component.html",
    styleUrls: ["registration.component.css"]
})
export class RegistrationComponent {
    emailAdress = '';
    onEmailEnter = false;
    
    emailEntered() {
        this.onEmailEnter = true;
    }
    
    clearEmail() {
        this.emailAdress = '';
    }
}