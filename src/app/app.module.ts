import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { ListFilmComponent } from './film/list-film/list-film.component';
import {CoreModule} from "./core/core.module";
import { DetailMovieComponent } from './film/detail-movie/detail-movie.component';

import { HistoriqueMovieComponent } from './film/historique-movie/historique-movie.component';
import { NavBarFilmComponent } from './film/nav-bar-film/nav-bar-film.component';
import { AuthGuard } from '../app/core/guards/auth.guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    ListFilmComponent,
    DetailMovieComponent,
    HistoriqueMovieComponent,
    NavBarFilmComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    NgxPaginationModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
