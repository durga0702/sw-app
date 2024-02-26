import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sw-app';
  public data:any =[];
  public singleData:any = {};
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res)=>{
      this.data = res;
    });
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res)=>{
      this.singleData = res;
    });
  }
}
