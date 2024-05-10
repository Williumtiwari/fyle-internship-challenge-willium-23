import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { RepoListComponent } from './main/repo-list/repo-list.component';
import { GithubProfileComponent } from './main/github-profile/github-profile.component';
import { InvalidUsernameComponent } from './main/invalid-username/invalid-username.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    RepoListComponent,
    GithubProfileComponent,
    InvalidUsernameComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
