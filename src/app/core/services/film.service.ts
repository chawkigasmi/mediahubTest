
import {Injectable, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}`;


  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnDestroy(): void {
  }
 
  getMovies(query: string, sortBy: string, id?: any) {
    let url = `${this.apiUrl}movies`;
  
    if (id) {
      url += `/${id}`;
    } else {
      const params = new HttpParams()
        .set('query', query)
        .set('sortBy', sortBy);
  
      return this.http.get(url, { params });
    }
  
    return this.http.get(url);
  }
  

}
