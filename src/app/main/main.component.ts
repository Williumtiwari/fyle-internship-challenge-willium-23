import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GitHubUser } from '../data/Userdata-Github';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  // Input properties for component customization
  @Input() appTitle: string = '';

  @ViewChild('searchResultSection', { static: false })
  searchResultSection: ElementRef | null = null;
  // App Logo
  ImageUrl: string = '/assets/Github.svg';
  // Input Property for Username
  username: string = '';

  // State Properties
  repos: any[] = [];
  totalRepoCount: number = 0;
  currentPage: number = 1;
  perPage: number = 10;
  isValidUser: boolean = false;
  searchClicked: boolean = false;
  searchedUser: GitHubUser | undefined;

  /**
   * @brief Method to reset state properties
   */
  private resetState(): void {
    this.repos = [];
    this.totalRepoCount = 0;
    this.currentPage = 1;
    this.isValidUser = false;
    this.searchedUser = undefined;
  }

  // Loading Indicators
  loadingRepo: boolean = false;
  loadingUser: boolean = false;

  // Options for items per page
  ReposPerPageOptions: number[] = [10, 50, 100];

  // Constructor to inject the GithubApiService
  constructor(private githubService: GithubApiService) {}

  // Cache for searched results
  private resultCache: { [key: string]: any[] } = {};

  // Check if data is present in cache
  private isDataInCache(
    username: string,
    page: number,
    perPage: number
  ): boolean {
    const key = `${username}_${page}_${perPage}`;
    return this.resultCache.hasOwnProperty(key);
  }

  // Retrieve Data from cache
  private getDataFromCache(
    username: string,
    page: number,
    perPage: number
  ): any {
    const key = `${username}_${page}_${perPage}`;
    return this.resultCache[key];
  }

  // Store Data in Cache
  private setDataInCache(
    username: string,
    page: number,
    perPage: number,
    data: any
  ): void {
    const key = `${username}_${page}_${perPage}`;
    this.resultCache[key] = data;
  }

  /**
   * @brief Handles the user search process by calling the necessary functions.
   * @param result - Object containing user search result
   */
  searchUser(result: any): void {
    this.username = result.username;

    if (this.username.length) {
      this.searchClicked = true;

      // Reset state before initiating a new search
      this.resetState();

      // Initiates user details and repositories search
      this.searchUserDetails();
      this.searchUserRepositories();
    } else {
      window.alert('Enter Username First');
    }
  }

  /**
   * @brief Retrieves user information from the GitHub service.
   */
  searchUserDetails(): void {
    this.loadingUser = true;
    this.githubService.getUserInfo(this.username).subscribe({
      next: (user: GitHubUser) => {
        // Update User data after getting from Github API
        this.totalRepoCount = user.public_repos;
        this.searchedUser = user;
        this.isValidUser = true;
        this.loadingUser = false;
      },
      error: (error) => {
        // Error Handling
        this.isValidUser = false;
        this.loadingUser = false;
        console.error('Error loading user details:', error);
        this.handleError('Error loading user details. Please try again.');
      },
    });
  }

  /**
   * @brief Retrieves user repositories from the GitHub service.
   */
  searchUserRepositories(): void {
    // Check if the repo data id in cache
    if (this.isDataInCache(this.username, this.currentPage, this.perPage)) {
      this.repos = this.getDataFromCache(
        // Retrieve repo data from cache
        this.username,
        this.currentPage,
        this.perPage
      );
      this.loadingRepo = false;
      this.scrollToSearchResult();
    } else {
      // Data not found in cache make api call
      this.loadingRepo = true;
      this.githubService
        .getUserRepos(this.username, this.currentPage, this.perPage)
        .subscribe({
          next: (repos) => {
            // Update Data after getting from API Call
            this.repos = repos;
            this.loadingRepo = false;
            this.scrollToSearchResult();

            // Cache Updated for future results
            this.setDataInCache(
              this.username,
              this.currentPage,
              this.perPage,
              repos
            );
          },
          error: (error) => {
            // Error handling
            this.repos = [];
            this.isValidUser = false;
            this.loadingRepo = false;
            this.scrollToSearchResult();
            console.error('Error loading repositories:', error);
            this.handleError('Error loading repositories. Please try again.');
          },
        });
    }
  }

  // Private method for handling errors
  private handleError(errorMessage: string): void {
    console.log(errorMessage);
  }

  // Smooth Scrolling
  private scrollToSearchResult(): void {
    if (this.searchResultSection && this.searchResultSection.nativeElement) {
      this.searchResultSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  /**
   * @brief Handles the change in items per page in the dropdown.
   * @param itemsPerPage - The number of items to display per page.
   */
  updateItemsPerPage(itemsPerPage: number): void {
    this.perPage = itemsPerPage;
    this.currentPage = 1;
    this.searchUserRepositories();
  }

  /**
   * @brief Handles the change in the current page.
   * @param page - The page number to navigate to.
   */
  updateCurrentPage(page: number): void {
    this.currentPage = page;
    this.searchUserRepositories();
  }
}
