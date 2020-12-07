import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDvdComponent } from './info-dvd.component';

describe('InfoDvdComponent', () => {
  let component: InfoDvdComponent;
  let fixture: ComponentFixture<InfoDvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDvdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
