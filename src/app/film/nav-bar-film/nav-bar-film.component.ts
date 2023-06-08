import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar-film',
  templateUrl: './nav-bar-film.component.html',
  styleUrls: ['./nav-bar-film.component.css']
})
export class NavBarFilmComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute)
  {}

  ngOnInit(): void {
  }

  historqueVisit() {
    // Handles the click event for "Movie History" button
    localStorage.removeItem('query');
    localStorage.removeItem('sortBy');
  }

  retourList() {
    // Handles the click event for "All movies" button
    this.router.navigate(['/list-film']);
  }

  logOut() {
    // Handles the click event for "Log out" button
    this.router.navigate(['/']);
    localStorage.clear();
  }
  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
