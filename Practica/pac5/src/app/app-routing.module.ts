import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/detail/detail.component';
// import { GridComponent } from './components/grid/grid.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'movie/:id', component: DetailComponent },
  { path: '**', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
