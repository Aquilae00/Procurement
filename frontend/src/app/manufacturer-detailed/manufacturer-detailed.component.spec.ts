import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerDetailedComponent } from './manufacturer-detailed.component';

describe('ManufacturerDetailedComponent', () => {
  let component: ManufacturerDetailedComponent;
  let fixture: ComponentFixture<ManufacturerDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
