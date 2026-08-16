import { Component, input } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CurrencyPipe,
    DatePipe,
    TitleCasePipe,
    UpperCasePipe,
    ShortenPipe,
    Highlight
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = input.required<string>();
  subtitle = 'Learn good work and make good experience';
  name = '';
  showDetails = false;

  topics = [
    'Video',
    'Audio',
    'Edit',
    'Cut',
    'Stand',
    'Short'
  ];

  courseName = 'Studio practical learning';
  price = 1499.99;
  today = new Date();

  description =
    'Studio is a powerful framework for building modern work.';

  highlightColor = 'lightblue';

  startLearning() {
    this.showDetails = true;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  clearName() {
    this.name = '';
  }
}