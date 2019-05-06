import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonDataService } from '../person-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personDataService: PersonDataService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkIdentity(url);
  }

  checkIdentity(url: string): boolean {
    if (this.personDataService.getPersonModel()) {
      if(url === '/add'){
        return false;
      }
      return true;
    }
    if(url === '/add'){
      return true;
    }
    
    this.router.navigate(['/add'], { relativeTo: this.route });
    return false;
  }
}
