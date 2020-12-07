import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDvdComponent } from './list-dvd.component';

describe('ListDvdComponent', () => {
  let component: ListDvdComponent;
  let fixture: ComponentFixture<ListDvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDvdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
