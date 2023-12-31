import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateMenuComponent } from './navigate-menu.component';

describe('NavigateMenuComponent', () => {
  let component: NavigateMenuComponent;
  let fixture: ComponentFixture<NavigateMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigateMenuComponent]
    });
    fixture = TestBed.createComponent(NavigateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
