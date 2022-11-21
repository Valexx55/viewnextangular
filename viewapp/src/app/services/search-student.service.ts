import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchStudentService {
  public searchStudentObservable: Observable<string>;
  private searchStudentSubject = new Subject<string>();

  constructor() {
    this.searchStudentObservable = this.searchStudentSubject.asObservable();
  }

  public emitSearchStudentEvent(selectedLocation: string): void {
    this.searchStudentSubject.next(selectedLocation);
  }
}