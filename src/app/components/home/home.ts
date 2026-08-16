import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    title = 'Welcome to My World';
    description = 'I am Web Developer';
    imageUrl = "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    message = "";
    sayHello(){
      this.message = "Hy I am bishir"
    }
    name = ""
  }
