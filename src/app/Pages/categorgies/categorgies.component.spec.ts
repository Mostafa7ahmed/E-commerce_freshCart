import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorgiesComponent } from './categorgies.component';

describe('CategorgiesComponent', () => {
  let component: CategorgiesComponent;
  let fixture: ComponentFixture<CategorgiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorgiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorgiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
