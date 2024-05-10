import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
})
export class RepoListComponent {
  // Input property for displaying repos in the page
  @Input() repos: any[] = [];
  FileUrl: string = '/assets/RepoList.svg';
}
