import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarFilmComponent } from './nav-bar-film.component';

describe('NavBarFilmComponent', () => {
  let component: NavBarFilmComponent;
  let fixture: ComponentFixture<NavBarFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarFilmComponent ],
      imports: [RouterTestingModule] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
