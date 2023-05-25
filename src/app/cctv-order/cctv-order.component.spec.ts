import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvOrderComponent } from './cctv-order.component';

describe('CctvOrderComponent', () => {
  let component: CctvOrderComponent;
  let fixture: ComponentFixture<CctvOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
