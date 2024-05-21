import { Component } from '@angular/core';
import { Personal, Sheridan } from "../classsetup";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
x: any;
city = "Toronto"
details = 'New paragraph';
image = 'assets/images/ilkfoto.png';

clearCity() {
   this.city = ''; }

mouse() { 
  this.city = 'Mississauga'; }

mouse2() { 
  this.city = 'Toronto'; }
   
   
mydata:Personal = {first:'Enes', last:'Fidan', country:'Turkey'}
mydata1:Sheridan = {id:54684, login:'fidan', email:'enidasadd@comeallover.me'}
  
}
