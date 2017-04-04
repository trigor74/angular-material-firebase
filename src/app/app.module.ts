// libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { firebaseConfig } from './config';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { LocationComponent } from './location/location.component';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id', component: MemberComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, AccountComponent, LocationsComponent, HomeComponent, MembersComponent, MemberComponent, LocationComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
