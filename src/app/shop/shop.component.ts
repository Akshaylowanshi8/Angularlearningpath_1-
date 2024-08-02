import { Component } from '@angular/core';
import { FormControl ,Validators,FormGroup,FormGroupName , ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
loginform = new FormGroup(
  {
    username: new FormControl("",Validators.required),
    age: new FormControl("",Validators.required),
    pass: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required, Validators.email]),
  }
)
onSubmit() {
console.log(this.loginform.value);
this.loginform.reset()
}}