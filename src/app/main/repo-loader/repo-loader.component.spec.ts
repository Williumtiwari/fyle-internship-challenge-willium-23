import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLoaderComponent } from './repo-loader.component';

describe('RepoLoaderComponent', () => {
  let component: RepoLoaderComponent;
  let fixture: ComponentFixture<RepoLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoLoaderComponent]
    });
    fixture = TestBed.createComponent(RepoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
