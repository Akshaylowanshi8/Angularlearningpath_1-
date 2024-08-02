import { Component} from '@angular/core';
@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  submithandl(userid:any,password:any){ 
    console.log(userid,password);
    if(userid=="Akshay" && password=="123")
    { 
      sessionStorage.setItem("islogin","true")
      alert("login")
    }
    else
    {
      sessionStorage.setItem("islogin" ,"false")
    }
  }
}