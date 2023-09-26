 import { Component } from '@angular/core';
 

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyWorkComponent {
 

  constructor() {}

  ToGitHubElPoloLoco() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://github.com/JonasWemmers/ElPolloLoco';
    
    // Die Facebook-Seite aufrufen
    window.open(githubUrl, '_blank');

  }

  redirectToLiveElPoloLoco() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://jonas-wemmers.developerakademie.net/ElPolloLoco/index.html';
    
    // Die Facebook-Seite aufrufen
    window.open(githubUrl, '_blank');

    
  }


  ToGitHubJOIN() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://github.com/JonasWemmers/JOIN';
    
    // Die Facebook-Seite aufrufen
    window.open(githubUrl, '_blank');

  }

  redirectToLiveJOIN() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://jonas-wemmers.developerakademie.net/JOIN_Kanban/index.html';
    
    // Die Facebook-Seite aufrufen
    window.open(githubUrl, '_blank');
  }
}
