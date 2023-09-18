import { Component } from '@angular/core';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent {
  constructor() {}

  scrollToTarget(target: string) {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  redirectToGitHub() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://github.com/JonasWemmers';
    
    // Die Facebook-Seite aufrufen
    window.location.href = githubUrl;
  }

  sendEmail() {
    // Hier deine E-Mail-Adresse eintragen
    const email = 'mailto:jonas.wemmers@freenet.de';
    
    // E-Mail-Anwendung öffnen
    window.location.href = email;
  }

  redirectToLinkedIn() {
    // Hier die URL deiner LinkedIn-Seite eintragen
    const linkedInUrl = 'https://www.linkedin.com/in/jonas-wemmers-a34083142/';
    
    // Die LinkedIn-Seite aufrufen
    window.location.href = linkedInUrl;
  }
}
