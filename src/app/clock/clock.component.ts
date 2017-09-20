import { Component } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls : ['./clock.component.css']
})
export class ClockComponent {
    
    time = this.time;
    
    constructor(){
    
        setInterval(() => {
            this.time = new Date() ;
            
        }, 1000)
    }
}