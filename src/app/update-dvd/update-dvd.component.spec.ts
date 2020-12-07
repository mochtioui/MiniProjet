import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDvdComponent } from './update-dvd.component';

describe('UpdateDvdComponent', () => {
  let component: UpdateDvdComponent;
  let fixture: ComponentFixture<UpdateDvdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDvdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
