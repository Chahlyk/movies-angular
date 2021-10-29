import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostersComponent } from './posters/posters.component';
import { DetailPosterComponent } from './detail-poster/detail-poster.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyFavouriteComponent } from "./my-favourite/my-favourite.component";

const routes: Routes =[
  { path: '', redirectTo: '/posters', pathMatch: 'full' },
  { path: 'posters', component: PostersComponent },
  { path: 'favourite', component: MyFavouriteComponent },
  { path: 'detail/:id', component: DetailPosterComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
