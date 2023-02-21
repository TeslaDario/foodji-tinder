import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';
import { Product } from 'src/app/models';

const LIKED_KEY = 'likedProducts';
const DISLIKED_KEY = 'dislikedProducts';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private storeService: StoreService) {}

  products$ = new BehaviorSubject<Product[]>([]);
  likedProducts$ = new BehaviorSubject<string[]>(
    this.storeService.get(LIKED_KEY)
  );
  dislikedProducts$ = new BehaviorSubject<string[]>(
    this.storeService.get(DISLIKED_KEY)
  );

  private availableProducts$ = combineLatest([
    this.products$,
    this.likedProducts$,
    this.dislikedProducts$,
  ]).pipe(
    map(([products, likedIds, dislikedIds]) =>
      products.filter(
        (p) => !likedIds.includes(p.id) && !dislikedIds.includes(p.id)
      )
    )
  );

  foodProducts$: Observable<Product[]> = this.availableProducts$.pipe(
    map((products) =>
      products.filter(
        (product) =>
          this.isCategory(product, 'Food') || this.isCategory(product, 'Mains')
      )
    )
  );

  drinksProducts$: Observable<Product[]> = this.availableProducts$.pipe(
    map((products) =>
      products.filter((product) => this.isCategory(product, 'Snacks'))
    )
  );

  snacksProducts$: Observable<Product[]> = this.availableProducts$.pipe(
    map((products) =>
      products.filter((product) => this.isCategory(product, 'Drinks'))
    )
  );

  like(id: string): void {
    const data = this.likedProducts$.getValue().concat([id]);
    this.storeService.set(LIKED_KEY, data);
    this.likedProducts$.next(data);
  }

  dislike(id: string): void {
    const data = this.dislikedProducts$.getValue().concat([id]);
    this.storeService.set(DISLIKED_KEY, data);
    this.dislikedProducts$.next(data);
  }

  reset(): void {
    this.likedProducts$.next([]);
    this.storeService.remove(LIKED_KEY);

    this.dislikedProducts$.next([]);
    this.storeService.remove(DISLIKED_KEY);
  }

  private isCategory(product: Product, category: string): boolean {
    return product.category.name.indexOf(category) !== -1;
  }
}
