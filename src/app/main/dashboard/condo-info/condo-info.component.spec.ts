import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondoInfoComponent } from './condo-info.component';

describe('CondoInfoComponent', () => {
  let component: CondoInfoComponent;
  let fixture: ComponentFixture<CondoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
