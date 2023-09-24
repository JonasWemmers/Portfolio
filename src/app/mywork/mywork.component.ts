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
    const githubUrl = 'https://github.com/JonasWemmers';
    
    // Die Facebook-Seite aufrufen
    window.location.href = githubUrl;
  }

  redirectToLiveElPoloLoco() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://jonas-wemmers.developerakademie.net/ElPolloLoco/index.html';
    
    // Die Facebook-Seite aufrufen
    window.location.href = githubUrl;
  }


  ToGitHubJOIN() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://github.com/JonasWemmers';
    
    // Die Facebook-Seite aufrufen
    window.location.href = githubUrl;
  }

  redirectToLiveJOIN() {
    // Hier die URL deiner Facebook-Seite eintragen
    const githubUrl = 'https://jonas-wemmers.developerakademie.net/JOIN_Kanban/index.html';
    
    // Die Facebook-Seite aufrufen
    window.location.href = githubUrl;
  }
}
