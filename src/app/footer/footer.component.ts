import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  redirectToGitHub() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://github.com/JonasWemmers';
    
    // Die Facebook-Seite aufrufen
    window.location.href = githubUrl;
  }

  redirectToLinkedIn() {
    // Hier die URL deiner LinkedIn-Seite eintragen
    const linkedInUrl = 'https://www.linkedin.com/in/jonas-wemmers-a34083142/';
    
    // Die LinkedIn-Seite aufrufen
    window.location.href = linkedInUrl;
  }
}
