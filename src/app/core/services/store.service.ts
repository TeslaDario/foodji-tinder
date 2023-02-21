import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor() {}

  set(key: string, value: any) {
    if (key === null || key === undefined) {
      return;
    }

    try {
      value = JSON.stringify(value);
    } catch (err) {
      console.warn('Error at trying to stringify value', err);
    }

    console.log('[STORE] set', key);
    localStorage.setItem(key, value);
  }

  get(key: string): string[] {
    const value = localStorage.getItem(key);

    if (value === undefined || value === null) {
      return [];
    } else {
      let stringValue: string[] = [];

      try {
        stringValue = JSON.parse(value) as string[];
      } catch (err) {
        console.warn('Error at trying to parse value', err);
      }
      return stringValue;
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
