import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public v$ = new BehaviorSubject<number>(1);
  public v2$ = new Observable<number>((listX) => {
    listX.next(1);
  });
  constructor() {}
  public incrementV(): void {
    this.v$.next(this.v$.value + 1);
    this.v2$ = new Observable<number>((listX) => {
      listX.next(2);
    });
  }
}
