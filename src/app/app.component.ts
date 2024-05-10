import { Component } from '@angular/core';
import { Developer } from './data/DeveloperData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Application title
  appTitle: string = 'GitHub info';

  // Current year for the footer
  currentYear: number = new Date().getFullYear();

  // Developer information
  developer: Developer = {
    name: 'Williumtiwari',
    githubUrl: 'https://github.com/Williumtiwari',
  };
}
