import { Component, output } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  messageSent = output<string>();

  sendMessage (){
    this.messageSent.emit("Message send")
  }
}
