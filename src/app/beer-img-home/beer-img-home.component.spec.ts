import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerImgHomeComponent } from './beer-img-home.component';

describe('BeerImgHomeComponent', () => {
  let component: BeerImgHomeComponent;
  let fixture: ComponentFixture<BeerImgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerImgHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerImgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
