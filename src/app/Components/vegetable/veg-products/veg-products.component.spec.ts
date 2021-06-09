import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegProductsComponent } from './veg-products.component';

describe('VegProductsComponent', () => {
  let component: VegProductsComponent;
  let fixture: ComponentFixture<VegProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
