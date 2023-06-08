import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FilmService } from "../../core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  movie_id: any;
  movie: any;

  constructor(public route: ActivatedRoute, private filmService: FilmService, private router: Router) {}

  ngOnInit(): void {
    // Get the movie ID from the URL parameters
    this.movie_id = this.route.snapshot.paramMap.get('id');

    // Call the function to fetch the movie details by its ID
    this.getMoviesById();
  }

  async getMoviesById() {
    // Call the `FilmService` to retrieve the movie details using its ID
    this.movie = await this.filmService.getMovies("", "", this.movie_id).toPromise();
  }

  retourList() {
    this.router.navigate(['/list-film']);
  }
}
