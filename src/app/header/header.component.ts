import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() appTitle: string = 'GitHub info';
  ImageUrl: string = '/assets/Github.svg';
}
