
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { PowerService } from './power.service';
import { Power } from './power.model';

@Injectable({
  providedIn: 'root',
})
export class PowerDetailResolverService implements Resolve<Power> {
  constructor(private ps: PowerService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Power> | Observable<never> {
    const id = route.paramMap.get('id');

    const intId = parseInt(id, 10);

    return this.ps.getPower(intId).pipe(
      take(1),
      mergeMap(power => {
        if (power) {
          return of(power);
        } else { // id not found
          this.router.navigate(['/power']);
          return EMPTY;
        }
      })
    );
  }
}
