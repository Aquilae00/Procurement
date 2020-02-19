import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryDetailedComponent } from './factory-detailed.component';

describe('FactoryDetailedComponent', () => {
  let component: FactoryDetailedComponent;
  let fixture: ComponentFixture<FactoryDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
