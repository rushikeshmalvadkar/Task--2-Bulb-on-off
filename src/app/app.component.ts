import { Component  } from '@angular/core';
import { StudentService } from 'src/assets/student.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

     buttonShow = true;
    bulbShow = false;
  constructor(private service : StudentService){

  }

  ngOnInit(){


  }

  bulbOn(){

      this.bulbShow = true;
     this. buttonShow=false;
  }
  bulbOff(){

    this.bulbShow=false;
    this.buttonShow=true;
  }


}


