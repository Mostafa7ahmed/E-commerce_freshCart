import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPageComponent } from './navbar-page.component';

describe('NavbarPageComponent', () => {
  let component: NavbarPageComponent;
  let fixture: ComponentFixture<NavbarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
