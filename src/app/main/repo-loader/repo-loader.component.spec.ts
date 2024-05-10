import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLoaderComponent } from './repo-loader.component';
import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule,
} from 'ngx-skeleton-loader';

describe('RepoLoaderComponent', () => {
  let component: RepoLoaderComponent;
  let fixture: ComponentFixture<RepoLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoLoaderComponent, NgxSkeletonLoaderComponent],
      imports: [NgxSkeletonLoaderModule],
    });
    fixture = TestBed.createComponent(RepoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
