import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmService } from "../../core";
import { Router } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  // Pagination properties
  pageSize: number = 10; // Number of items per page
  currentPage: number = 1; // Current page number
  totalItems: number = 0; // Total number of items
  hasResults!: boolean;
  showSpinner:boolean = true;
  searchText: string = '';
  list_movies: any;
  query = "";
  sortBy = "";
  sortDirection: string = 'asc';

  constructor(private http: HttpClient, public filmService: FilmService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  // Function to get the sorting icon based on the column and current sort direction
  getSortIcon(column: string) {
    if (this.sortBy === column) {
      return this.sortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
    } else {
      return 'fa-sort';
    }
  }
  
  // Function to handle sorting based on the key
  sort(key: string): void {
      this.showSpinner = true;
    localStorage.setItem('sortBy', key);
    this.sortBy = key;
    this.getMovies();
  }

  // Function to handle key up event for search
  onKeyUp(event: any) {
    this.showSpinner = true;
    localStorage.setItem('query', event.target.value);
    this.query = event.target.value;
    if(this.searchText==""){
      this.getMovies();
    }
  }

  // Function to handle search button click event
  searchBtn() {
    this.showSpinner = true;
    localStorage.setItem('query', this.searchText);
    this.query = this.searchText;
    this.getMovies();
  }

  // Function to get movies 
  async getMovies() {
    this.query = localStorage.getItem('query') || '';
    this.sortBy = localStorage.getItem('sortBy') || '';
    this.searchText = this.query;

    this.list_movies = await this.filmService.getMovies(this.query, this.sortBy)
      .pipe(
        delay(1000), // Add a delay of 1 second between requests
        switchMap(async (response) => response)
      )
      .toPromise();
    
      this.totalItems = this.list_movies.length;
      this.hasResults = this.list_movies.length > 0;
      this.showSpinner = false;
     
  }

  // Function to get the detail of a movie and navigate to its detail page
  getDetailMovie(movie: any) {
    const newObj = {
      title: movie.Title,
      Director: movie.Director,
      Distributor: movie.Distributor,
      Source: movie.Source
    };
    this.router.navigate(['/detail-film', movie.id]);
    const storedJsonString = localStorage.getItem('myArray');
    let storedArray: any[] = [];
    
    if (storedJsonString !== null) {
      storedArray = JSON.parse(storedJsonString);
    }
    
    storedArray.push(newObj);
    const updatedJsonString = JSON.stringify(storedArray);
    localStorage.setItem('myArray', updatedJsonString);
  }
}
