import { Injectable } from '@angular/core';
import { Dish } from './dish';
//import { DISHES } from './mock-dishes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private dishesUrl = 'api/dishes';

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.dishesUrl)
      .pipe(
        catchError(this.handleError('getDishes', []))
      );
  }

  getDishe(id: number): Observable<Dish> {
    const url = `${this.dishesUrl}/${id}`;
    return this.http.get<Dish>(url)
    .pipe(
      catchError(this.handleError<Dish>('getDishes'))
    )
  }

  updateDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(this.dishesUrl,dish,httpOptions)
    .pipe(
      catchError(this.handleError<Dish>('updateDishes'))
    )
  }

  searchDishes(term: string): Observable<Dish[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Dish[]>(`${this.dishesUrl}/?name=${term}`)
    .pipe(
      catchError(this.handleError<Dish[]>('searchDishes'))
    )
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

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

