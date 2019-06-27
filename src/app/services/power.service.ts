import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero.model';
import { Power } from '../models/power.model';
import { MessageService } from './message.service';
import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PowerService {

  private powersUrl = 'api/powers';

  constructor(private http: HttpClient, private messageService: MessageService, private toastr: ToastrService) { }

  /** GET hero powers from the server */
  getAllPowers(): Observable<Power[]> {
    return this.http.get<Power[]>(this.powersUrl)
      .pipe(
        tap(_ => this.log('fetched hero powers')),
        catchError(this.handleError<Power[]>('getAllPowers', []))
      );
  }

  /** GET hero power by id. Will 404 if id not found */
  getPower(id: number): Observable<Power> {
    const url = `${this.powersUrl}/${id}`;
    return this.http.get<Power>(url).pipe(
      tap(_ => this.log(`fetched hero power id=${id}`)),
      catchError(this.handleError<Power>(`getPower id=${id}`))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getPower404(id: number): Observable<Power> {
    const url = `${this.powersUrl}/?id=${id}`;
    return this.http.get<Power[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} power id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getPower id=${id}`))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero power to the server */
  addPower(power: Power): Observable<Power> {
    return this.http.post<Power>(this.powersUrl, power, httpOptions).pipe(
      tap((newPower: Power) => this.log(`added hero power w/ id=${newPower.id}`)),
      catchError(this.handleError<Power>('addPower'))
    );
  }

  /** DELETE: delete the hero power from the server */
  deletePower(power: Power | number): Observable<Power> {

    const id = typeof power === 'number' ? power : power.id;
    const url = `${this.powersUrl}/${id}`;

    return this.http.delete<Power>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero power id=${id}`)),
      catchError(this.handleError<Power>('deletePower'))
    );
  }

  /** PUT: update the hero power on the server */
  updatePower(power: Power): Observable<any> {
    return this.http.put(this.powersUrl, power, httpOptions).pipe(
      tap(_ => this.log(`updated hero power id=${power.id}`)),
      catchError(this.handleError<any>('updatePower'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`PowerService: ${message}`);
  // }

  private log(message: string) {
    this.toastr.success(`PowerService: ${message}`);
  }

}
