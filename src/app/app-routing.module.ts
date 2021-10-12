import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyAccountComponent } from "./my-account/my-account.component";
import { PostersComponent } from "./posters/posters.component";
import { InfosComponent } from "./infos/infos.component";

const routes: Routes =[
  {path: '', component: PostersComponent},
  {path: 'my-account', component: MyAccountComponent},
  {path: 'info/:id', component: InfosComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
