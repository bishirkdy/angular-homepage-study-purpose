import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pageTitle = 'My Studio New World';
}