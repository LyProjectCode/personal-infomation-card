import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from './person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PersonHttpService {
  private personsUrl = 'api/persons';
  constructor(private http: HttpClient, ) { }

  public addPersonModel(person: Person): void {
    window.localStorage.setItem('personInfo', JSON.stringify(person));
  }

  public addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personsUrl, person, httpOptions).pipe(
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  public getPerson(): Observable<any> {
    const url = `${this.personsUrl}`;
    return this.http.get<Person>(url).pipe(
      catchError(this.handleError<Person>(`getPerson`))
    );
  }

  public updatePerson(person: Person): Observable<any> {
    return this.http.put(this.personsUrl, person, httpOptions).pipe(
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
