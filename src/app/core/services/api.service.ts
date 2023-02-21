import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, repeat, tap } from 'rxjs';
import { APIResponse } from 'src/app/models';
import { ProductsService } from 'src/app/shared/services/product.service';

const endpoint =
  'https://amperoid.tenants.foodji.io/machines/4bf115ee-303a-4089-a3ea-f6e7aae0ab94';
const POLLED_INTERVAL = 5_000;

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private productsService: ProductsService
  ) {}

  init(): void {
    this.http
      .get<APIResponse>(endpoint)
      .pipe(
        catchError(this.handleError),
        repeat({ delay: POLLED_INTERVAL }),
        tap((res) => console.log('[APIResponse]', res))
      )
      .subscribe((res) => {
        if (res.status !== 'success') {
          return;
        }

        this.productsService.products$.next(res.data.machineProducts);
      });
  }

  private handleError(error: any): Observable<never> {
    console.warn('[APIResponse FETCH ERROR]', error);
    return EMPTY;
  }
}
