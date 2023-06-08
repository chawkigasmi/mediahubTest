import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { FilmService } from './services/film.service';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    FilmService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
