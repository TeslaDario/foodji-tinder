import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { RejectedComponent } from './pages/rejected/rejected.component';

const routes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: 'rejected', component: RejectedComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
