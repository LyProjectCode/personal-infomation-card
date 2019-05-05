import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add', component: PersonAddComponent },
  { path: 'edit', component: PersonEditComponent },
  { path: 'info', component: PersonInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
