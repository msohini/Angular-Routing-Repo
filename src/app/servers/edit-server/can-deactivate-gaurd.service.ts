import { Observable } from 'rxjs/internal/Observable';
import { CanDeactivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export interface canComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

  }

export class canDeactivateGaurd implements CanDeactivate<canComponentDeactivate>{
  canDeactivate(component: canComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
