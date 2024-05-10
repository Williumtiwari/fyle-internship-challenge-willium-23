import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { MainComponent } from './main.component';
import { GithubApiService } from '../services/github-api.service';
import { of } from 'rxjs';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';

const githubServiceMock = {
  getUserInfo: () => of({ public_repos: 5 } as any),
  getUserRepos: () => of([{ name: 'Repo 1' }, { name: 'Repo 2' }] as any),
};

describe('MainGeistComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let githubService: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, InputComponent],
      providers: [{ provide: GithubApiService, useValue: githubServiceMock }],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubApiService);

    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('update user information on successful user search', fakeAsync(() => {
    spyOn(githubService, 'getUserInfo').and.returnValue(
      of({ public_repos: 5 } as any)
    );
    component.searchUser({ username: 'test' });
    tick();
    expect(component.isValidUser).toBeTruthy();
    expect(component.totalRepoCount).toBe(5);
  }));

  it('update repositories on successful repository search', fakeAsync(() => {
    spyOn(githubService, 'getUserRepos').and.returnValue(
      of([{ name: 'Repo 1' }, { name: 'Repo 2' }] as any)
    );
    component.searchUser({ username: 'test' });
    tick();
    expect(component.repos.length).toBe(2);
  }));
});
