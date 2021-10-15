import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostersComponent } from "./posters/posters.component";

const routes: Routes =[
  { path: '', redirectTo: '/posters', pathMatch: 'full' },
  { path: 'posters', component: PostersComponent },
  // {path: '**', component: NotComponent} // todo homework
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
