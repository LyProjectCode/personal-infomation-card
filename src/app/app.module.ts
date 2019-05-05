import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { NoSpaceDirective } from './no-space.directive';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PersonInfoComponent } from './person-info/person-info.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    PersonEditComponent,
    NoSpaceDirective,
    NavComponent,
    HomeComponent,
    PersonInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
