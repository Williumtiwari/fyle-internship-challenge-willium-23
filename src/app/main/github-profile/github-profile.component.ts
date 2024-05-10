import { Component, Input } from '@angular/core';
import { GitHubUser } from 'src/app/data/Userdata-Github';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
})
export class GithubProfileComponent {
  @Input() searchedUser: GitHubUser | undefined;
  ImageUrl: string = '/assets/Location.svg';
  UserUrl: string = '/assets/User.svg';
}
