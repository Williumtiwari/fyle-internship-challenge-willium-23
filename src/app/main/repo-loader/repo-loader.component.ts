import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repo-loader',
  templateUrl: './repo-loader.component.html',
})
export class RepoLoaderComponent {
  skeletonTheme: any;

  /**
   * @brief Gets the appropriate skeleton animation class based on the current 'appTheme'.
   * @returns A string representing the skeleton animation class.
   */
  getSkeletonAnimation(): string {
    return 'your-light-animation';
  }
}
