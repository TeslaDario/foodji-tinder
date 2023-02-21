import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { ProductsService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/models';
import { Observable, tap } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styles: [
    `
      .food-card {
        max-width: 400px;
        margin: auto;
        margin-bottom: 15px;
      }

      .example-header-image {
        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
        background-size: cover;
      }
    `,
  ],
})
export class HomeComponent {
  firstProduct!: Product | null;
  @AutoUnsubscribe() products$ = this.productsService.foodProducts$.subscribe(
    (products) => (this.firstProduct = products.length ? products[0] : null)
  );

  constructor(
    private menuService: MenuService,
    private productsService: ProductsService
  ) {}

  openMenu(): void {
    this.menuService.open();
  }

  onLike(id: string): void {
    this.productsService.like(id);
  }
  onDislike(id: string): void {
    this.productsService.dislike(id);
  }
}
