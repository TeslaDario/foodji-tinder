import { Component } from '@angular/core';
import { switchMap, map } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'rejected',
  templateUrl: 'rejected.component.html',
})
export class RejectedComponent {
  rejectedProducts$ = this.productsService.dislikedProducts$.pipe(
    switchMap((ids) =>
      this.productsService.products$.pipe(
        map((products) => products.filter((p) => ids.includes(p.id)))
      )
    )
  );

  constructor(private productsService: ProductsService) {}
}
