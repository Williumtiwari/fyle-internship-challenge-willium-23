import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GithubApiService } from './github-api.service';
import { InputComponent } from '../main/input/input.component';
import { AppComponent } from '../app.component';
import { MainComponent } from '../main/main.component';

describe('GithubApiService', () => {
  let service: GithubApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubApiService],
      declarations: [InputComponent, AppComponent, MainComponent],
    });

    service = TestBed.inject(GithubApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that there are no outstanding HTTP requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve user information', () => {
    const dummyUsername = 'testuser';
    const dummyUserData = { login: dummyUsername, name: 'Test User' };

    service.getUserInfo(dummyUsername).subscribe((userData) => {
      expect(userData).toEqual(dummyUserData);
    });

    const req = httpMock.expectOne(
      `https://api.github.com/users/${dummyUsername}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserData);
  });

  it('should retrieve user repositories with pagination', () => {
    const dummyUsername = 'testuser';
    const dummyPage = 1;
    const dummyPerPage = 10;
    const dummyUserRepos = [{ name: 'repo1' }, { name: 'repo2' }];

    service
      .getUserRepos(dummyUsername, dummyPage, dummyPerPage)
      .subscribe((userRepos) => {
        expect(userRepos).toEqual(dummyUserRepos);
      });

    const req = httpMock.expectOne(
      `https://api.github.com/users/${dummyUsername}/repos?page=${dummyPage}&per_page=${dummyPerPage}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserRepos);
  });
});
