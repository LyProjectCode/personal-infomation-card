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
import { ExerciseHomeComponent } from './exercise/exercise-home/exercise-home.component';
import { ExerciseRxjsComponent } from './exercise/exercise-rxjs/exercise-rxjs.component';
import { ExerciseMapComponent } from './exercise/exercise-map/exercise-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: PersonAddComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: PersonEditComponent, canActivate: [AuthGuard] },
  { path: 'info', component: PersonInfoComponent, canActivate: [AuthGuard] },
  {
    path: 'exercise', component: ExerciseComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: ExerciseHomeComponent },
      { path: 'pipe', component: ExercisePipeComponent },
      { path: 'service', component: ExerciseServiceComponent },
      { path: 'rxjs', component: ExerciseRxjsComponent },
      { path: 'map', component: ExerciseMapComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
