import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';


@Component({
  selector: 'app-root',
  imports: [Header, Home, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('concepts');
}
