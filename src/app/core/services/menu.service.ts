import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuState$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isOpened(): Observable<boolean> {
    return this.menuState$
      .asObservable()
      .pipe(tap((state) => console.log('[MENU]', state ? 'opened' : 'closed')));
  }

  open(): void {
    this.menuState$.next(true);
  }

  close(): void {
    this.menuState$.next(false);
  }
}
