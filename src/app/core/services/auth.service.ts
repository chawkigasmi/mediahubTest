import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}auth`;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnDestroy(): void {
    // Cleanup tasks when the AuthService is destroyed
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data).pipe(
      map((x) => {
        // Set the access token in local storage
        this.setLocalStorage(x);
        return x;
      })
    );
  }

  getMovies() {
    return this.http.get(`${this.apiUrl}/movies`);
  }

  setLocalStorage(x: any) {
    // Set the access token in local storage
    localStorage.setItem('access_token', x.token);
  }

  clearLocalStorage() {
    // Remove the access token from local storage
    localStorage.removeItem('access_token');
  }
}
