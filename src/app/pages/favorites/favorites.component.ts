import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';
import { ProductsService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'favorites',
  templateUrl: 'favorites.component.html',
})
export class FavoritesComponent {
  favoritesProducts$ = this.productsService.likedProducts$.pipe(
    switchMap((ids) =>
      this.productsService.products$.pipe(
        map((products) => products.filter((p) => ids.includes(p.id)))
      )
    )
  );

  constructor(
    private productsService: ProductsService,
    private store: StoreService
  ) {}
}
