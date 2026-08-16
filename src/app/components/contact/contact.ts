import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = '';
  email = '';
  message = '';
  submitted = false;

  submitForm() {
    this.submitted = true;
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.submitted = false;
  }
}