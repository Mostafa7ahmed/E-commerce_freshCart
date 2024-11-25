import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliesProductComponent } from './detalies-product.component';

describe('DetaliesProductComponent', () => {
  let component: DetaliesProductComponent;
  let fixture: ComponentFixture<DetaliesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaliesProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaliesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
