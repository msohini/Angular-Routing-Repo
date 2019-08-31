import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from './auth.service';

export class authGaurd implements CanActivate,CanActivateChild {
  constructor(private authservice :authService, private router : Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| Promise<boolean>|boolean 
  {
   return  this.authservice.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          return this.router.navigate(['/']);
        }

      }
    )
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route,state);
  }

}
