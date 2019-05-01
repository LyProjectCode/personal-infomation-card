import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [];
    return { persons };
  }

  genId(persons: Person[]): number {
    return persons.length > 0 ? Math.max(...persons.map(person => person.id)) + 1 : 1;
  }
}