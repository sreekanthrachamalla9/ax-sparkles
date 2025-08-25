import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-contact.component.html',
  styleUrls: ['./candidate-contact.component.scss']
})
export class CandidateContactComponent {
  contactForm = {
    fullName: '',
    mail: '',
    description: ''
  };

  submitForm() {
    console.log('Form Data:', this.contactForm);
    alert('Contact form submitted!');
  }
}
