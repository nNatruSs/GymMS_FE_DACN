import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBookComponent } from './booking-book.component';

describe('BookingBookComponent', () => {
  let component: BookingBookComponent;
  let fixture: ComponentFixture<BookingBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
