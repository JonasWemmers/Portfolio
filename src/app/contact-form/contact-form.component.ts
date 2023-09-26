import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSending: boolean = false;
  sendingOk: boolean = false;

  async sendMail() {
    this.isSending = true;

    let data = new FormData();
    data.append('name', this.name);
    data.append('email', this.email);
    data.append('message', this.message);

    try {
      const response = await fetch('https://jonas-wemmers.developerakademie.net/send_mail/send_mail.php', {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        this.cleanInputs();
        this.finishSending();
      } else {
        console.error('Error sending mail:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  }

  finishSending() {
    this.sendingOk = true;
    setTimeout(() => {
      this.sendingOk = false;
      this.isSending = false;
    }, 3000);
  }

  cleanInputs() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  scrollToTarget(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
