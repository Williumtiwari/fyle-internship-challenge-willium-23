import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-loader',
  templateUrl: './profile-loader.component.html',
})
export class ProfileLoaderComponent {
  // Theme object for defining the profile loader's background styles.
  skeletonTheme: any;

  // Theme object for defining the circular profile loader's background styles.
  skeletonThemeCircle: any;

  /**
   * @brief Gets the appropriate skeleton animation class based on the current 'appTheme'.
   * @returns A string representing the skeleton animation class.
   */
  getSkeletonAnimation(): string {
    return 'your-light-animation';
  }
}
