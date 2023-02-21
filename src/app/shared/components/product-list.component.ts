import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'product-list',
  template: `
    <ng-container *ngIf="items?.length; else emptyTemp">
      <p>List needs styling</p>

      <mat-list *ngFor="let product of items">
        <mat-card matListItem>
          <mat-card-header>
            <mat-card-title-group>
              <mat-card-title>{{ product.name }}</mat-card-title>
              <mat-card-subtitle>{{ product.manufacturer }}</mat-card-subtitle>
              <img mat-card-sm-image [src]="product.imageSet[0].url" />
            </mat-card-title-group>
          </mat-card-header>
          <mat-card-content>
            {{ product.shortDescription }}
          </mat-card-content>
        </mat-card>
      </mat-list>
    </ng-container>

    <ng-template #emptyTemp>List is empty</ng-template>
  `,
})
export class ProductListComponent {
  @Input() items!: Product[] | null;
}
