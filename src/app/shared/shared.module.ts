import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule( {
  declarations: [
    HeaderComponent,
    PaginationComponent,
  ],
    exports: [
        HeaderComponent,
        PaginationComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
