import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonShow = true;
  bulbShow = false;

  OnBulbOn() {
    this.bulbShow = true;
    this.buttonShow = false;
  }

  OnBulbOff() {
    this.bulbShow = false;
    this.buttonShow = true;
  }
}


