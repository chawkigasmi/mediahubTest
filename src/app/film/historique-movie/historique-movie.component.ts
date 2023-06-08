import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-movie',
  templateUrl: './historique-movie.component.html',
  styleUrls: ['./historique-movie.component.css']
})
export class HistoriqueMovieComponent implements OnInit {
   historiqueArray: any[] = [];
   uniqueMovies:any[]=[];
   movies: any;
  constructor() { }

  ngOnInit(): void {
    const storedJsonString = localStorage.getItem('myArray');

    if (storedJsonString !== null) {
      this.historiqueArray = JSON.parse(storedJsonString);
    }
    // Filter out duplicate movies
    this.uniqueMovies = this.historiqueArray.filter((movie, index, self) => {
      const titles = self.map((m) => m.title);
      return titles.indexOf(movie.title) === index;
    });
  }

}
