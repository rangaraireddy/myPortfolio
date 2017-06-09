import { Component } from '@angular/core';
import { ContactService } from './contactMe.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contactMe.html',
  styleUrls: ['./contactMe.css', '../app.component.css'],
  providers: [ContactService]
})

export class ContactComponent {
  private commentToRRR: string;
  private displayNote: string;
  private displayStyle: Object;
  
  constructor(private _contactService: ContactService) {
    this.displayStyle = {};
    this.commentToRRR = null;
    this.displayNote = '';
    this._contactService.initiateEmailJS();
  }
    
  hasCommented(ev) {
    try {
      this.commentToRRR = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }

  submitComment() {
    if (this.commentToRRR.trim().length > 0) {
      this._contactService.sendMail(this.commentToRRR).then((response: {'status': number}) => {
          if (response.status === 200) {
            this.commentToRRR = null;
            this.displayNote = 'Thank you for the comment. I am very much delighted.';
            this.displayStyle = { 'color':  '#106CC8' };
          } else {
            this.displayNote = 'Something went wrong. Please try again later.';
            this.displayStyle = { 'color':  '#f44336' };
          }
      });
    } else {
      this.displayNote = 'Please comment and then submit.';
      this.displayStyle = { 'color':  '#f44336' };
    }
  }
}
