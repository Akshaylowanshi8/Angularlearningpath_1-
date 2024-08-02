import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private http: HttpClient) {}

datas:any=""

getData(){
  this.http.get('https://jsonplaceholder.typicode.com/posts/3/comments')
    .subscribe(data => {
    this.datas=data
      console.log('Received data:', data);
      
      return 
    });



}
}

