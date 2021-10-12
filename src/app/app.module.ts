import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostersComponent } from './posters/posters.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PosterComponent } from './posters/poster/poster.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AppRoutingModule } from "./app-routing.module";
import { InfosComponent } from './infos/infos.component';
import { InfoComponent } from './infos/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    PostersComponent,
    PosterComponent,
    MyAccountComponent,
    InfosComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
