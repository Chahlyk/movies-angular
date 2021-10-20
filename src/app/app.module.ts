import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostersComponent } from './posters/posters.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PosterComponent } from './posters/poster/poster.component';
import { AppRoutingModule } from "./app-routing.module";
import { DetailPosterComponent } from './detail-poster/detail-poster.component';
import { SharedModule } from "./shared/shared.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostersComponent,
    PosterComponent,
    DetailPosterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
