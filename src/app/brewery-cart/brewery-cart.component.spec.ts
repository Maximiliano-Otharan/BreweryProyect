import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryCartComponent } from './brewery-cart.component';

describe('BreweryCartComponent', () => {
  let component: BreweryCartComponent;
  let fixture: ComponentFixture<BreweryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
