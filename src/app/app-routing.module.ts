import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: 'add', component: PersonAddComponent },
  { path: 'edit', component: PersonEditComponent },
  { path: 'person', component: PersonComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
