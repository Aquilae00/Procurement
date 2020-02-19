import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerSearchComponent } from './manufacturer-search.component';

describe('ManufacturerSearchComponent', () => {
  let component: ManufacturerSearchComponent;
  let fixture: ComponentFixture<ManufacturerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
