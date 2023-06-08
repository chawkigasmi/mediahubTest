import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { ListFilmComponent } from './film/list-film/list-film.component';
import { DetailMovieComponent } from './film/detail-movie/detail-movie.component';
import { HistoriqueMovieComponent } from './film/historique-movie/historique-movie.component';
import { AuthGuard } from '../app/core/guards/auth.guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [
  {

  path: '',
  component: PageLoginComponent,
  },
  { 
  path: 'list-film', 
  component: ListFilmComponent,
  canActivate: [AuthGuard]
 },
 { 
  path: 'detail-film/:id', 
  component: DetailMovieComponent,
  canActivate: [AuthGuard]
 },
 { 
  path: 'historique-film', 
  component: HistoriqueMovieComponent,
  canActivate: [AuthGuard]
 },
 { 
  path: '**', 
  component: NotFoundPageComponent 
}, // Route for unmatched URLs


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
