import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {
  constructor(private http:HttpClient){

  }
  url = "https://jsonplaceholder.typicode.com/photos"
  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      data=> console.log(data)
    )
  }
}
