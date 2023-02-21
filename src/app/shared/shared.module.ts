import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list.component';
import { SidenavComponent } from './components/sidenav.component';
import { GoBackDirective } from './directives/goBack.directive';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [SidenavComponent, ProductListComponent, GoBackDirective],
  exports: [
    MaterialModule,
    SidenavComponent,
    ProductListComponent,
    GoBackDirective,
  ],
  providers: [],
})
export class SharedModule {}
