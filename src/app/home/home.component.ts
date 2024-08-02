import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MyfirstserviceService } from '../myfirstservice.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title="Home" ;
_msg:string="";

constructor(private _massgeService:MyfirstserviceService){

}

getmassage(){

  this._msg=this._massgeService.getmassage();
}


}
