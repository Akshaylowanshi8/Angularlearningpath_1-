import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contect',
  standalone: true,
  imports: [CommonModule ,FormsModule,UpperCasePipe,TitleCasePipe],
  templateUrl: './contect.component.html',
  styleUrl: './contect.component.css'
})
export class ContectComponent {
  fullName: string = "Hello JavaTpoint";   
}
