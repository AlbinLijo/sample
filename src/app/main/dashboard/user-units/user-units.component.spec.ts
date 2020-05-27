import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnitsComponent } from './user-units.component';

describe('UserUnitsComponent', () => {
  let component: UserUnitsComponent;
  let fixture: ComponentFixture<UserUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
