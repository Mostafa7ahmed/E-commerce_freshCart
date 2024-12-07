import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllorderbuyComponent } from './allorderbuy.component';

describe('AllorderbuyComponent', () => {
  let component: AllorderbuyComponent;
  let fixture: ComponentFixture<AllorderbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllorderbuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllorderbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
