// external libraries / components, put in @NgModule imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// environments.ts contains the API Key for Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

// my generated components, put in @NgModule declarations
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListExperiencesComponent } from './components/list-experiences/list-experiences.component';
import { ExpFormComponent } from './components/exp-form/exp-form.component';

// my services, put in @NgModule providers
import { DbService } from './services/db.service';
import { UserService } from './services/user.service'


// my Routes
const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin/:key', component: AdminComponent},
  { path: 'listexperiences', component: ListExperiencesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    ListExperiencesComponent,
    ExpFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    // Firebase API Key is in /environments.ts
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    DbService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
