import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDeatailsComponent } from './vehicle-details.component';

describe('VehicleDeatailsComponent', () => {
  let component: VehicleDeatailsComponent;
  let fixture: ComponentFixture<VehicleDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
