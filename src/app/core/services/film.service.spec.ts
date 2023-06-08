import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmService } from './film.service';

describe('FilmService', () => {
  let service: FilmService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [FilmService],
    });
    service = TestBed.inject(FilmService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to retrieve movies without ID', () => {
    const query = 'search';
    const sortBy = 'title';
    const dummyMovies = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];

    service.getMovies(query, sortBy).subscribe((movies) => {
      expect(movies).toEqual(dummyMovies);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}movies?query=${query}&sortBy=${sortBy}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovies);
  });
});
