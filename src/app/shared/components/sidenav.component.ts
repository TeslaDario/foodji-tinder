import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'sidenav',
  template: `
    <mat-drawer-container class="container" autosize>
      <mat-drawer
        #drawer
        class="sidenav"
        mode="over"
        (closedStart)="onClose()"
        [opened]="menuOpened$ | async"
      >
        <mat-toolbar color="primary">
          <span>Foodji Tinder</span>
        </mat-toolbar>
        <div>
          <mat-list>
            <mat-list-item
              matRipple
              class="clickable"
              (click)="open('favorites')"
            >
              Favorites
            </mat-list-item>
            <mat-list-item
              matRipple
              class="clickable"
              (click)="open('rejected')"
            >
              Rejected
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item matRipple class="clickable" (click)="onReset()"
              >RESET</mat-list-item
            >
          </mat-list>
        </div>
      </mat-drawer>

      <div class="sidenav-content">
        <ng-content></ng-content>
      </div>
    </mat-drawer-container>
  `,
  styles: [
    `
      .sidenav-content {
        height: 100vh;
        overflow: hidden;
      }

      .sidenav {
        width: 300px;
        background-color: #fafafa;
      }
    `,
  ],
})
export class SidenavComponent {
  menuOpened$ = this.menuService.isOpened();

  constructor(
    private menuService: MenuService,
    private router: Router,
    private productsService: ProductsService
  ) {}

  onClose(): void {
    this.menuService.close();
  }

  open(page: 'favorites' | 'rejected'): void {
    this.router.navigate([page]);
    this.onClose();
  }

  onReset(): void {
    console.log('reset');
    this.productsService.reset();
    this.onClose();
  }
}
