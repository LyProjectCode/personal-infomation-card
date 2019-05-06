import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisePipeComponent } from './exercise/exercise-pipe/exercise-pipe.component';
import { ExerciseServiceComponent } from './exercise/exercise-service/exercise-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: PersonAddComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: PersonEditComponent, canActivate: [AuthGuard] },
  { path: 'info', component: PersonInfoComponent, canActivate: [AuthGuard] },
  {
    path: 'exercise', component: ExerciseComponent, canActivate: [AuthGuard],
    children: [
      { path: 'pipe', component: ExercisePipeComponent },
      { path: 'service', component: ExerciseServiceComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
