import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Truck } from '../model/truck';

const apiUrl = '/api/truck';
@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private http: HttpClient) { }


  findOne(id: string): Observable<Truck> {
    const fetchUrl = `${apiUrl}/${id}`;
    return this.http.get<Truck>(fetchUrl).pipe(
      tap(_ => console.log(`fetched product id=${id}`))
    );
  }

  create(truck): Observable<Truck> {
    return this.http.post<Truck>(apiUrl, truck).pipe(
      tap((t: Truck) => console.log(`added truck w/ id=${t.id}`)),
      catchError(this.handleError<Truck>('create truck'))
    );
  }

  findAll(): Observable<Truck[]> {
    return this.http.get<Truck[]>(apiUrl)
      .pipe(
        tap(products => console.log('Fetch trucks')),
        catchError(this.handleError('findAll', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

