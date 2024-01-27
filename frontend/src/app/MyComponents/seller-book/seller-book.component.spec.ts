import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBookComponent } from './seller-book.component';

describe('SellerBookComponent', () => {
  let component: SellerBookComponent;
  let fixture: ComponentFixture<SellerBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
