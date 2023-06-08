import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistoriqueMovieComponent } from './historique-movie.component';

describe('HistoriqueMovieComponent', () => {
  let component: HistoriqueMovieComponent;
  let fixture: ComponentFixture<HistoriqueMovieComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    // Set the localStorage value manually
    const movies = [{ title: 'Movie 1' }, { title: 'Movie 2' }];
    localStorage.setItem('myArray', JSON.stringify(movies));

    await TestBed.configureTestingModule({
      declarations: [HistoriqueMovieComponent],
      imports: [HttpClientTestingModule], // Import the HttpClientTestingModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueMovieComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unexpected requests were made
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize historiqueArray from localStorage', () => {
    expect(component.historiqueArray.length).toBe(2);
    expect(component.historiqueArray[0]).toEqual({ title: 'Movie 1' });
    expect(component.historiqueArray[1]).toEqual({ title: 'Movie 2' });
  });

  it('should filter out duplicate movies in uniqueMovies array', () => {
    expect(component.uniqueMovies.length).toBe(2);
    expect(component.uniqueMovies[0]).toEqual({ title: 'Movie 1' });
    expect(component.uniqueMovies[1]).toEqual({ title: 'Movie 2' });
  });
});
