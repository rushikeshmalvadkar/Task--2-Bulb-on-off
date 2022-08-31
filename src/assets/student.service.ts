import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url="https://jsonplaceholder.typicode.com/todos/1";
  constructor( private http : HttpClient){

  }
  ngOnInit(){

  }
  getData(){
    return this.http.get(this.url);

  }

}
