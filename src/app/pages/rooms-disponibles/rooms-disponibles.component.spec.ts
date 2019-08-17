import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsDisponiblesComponent } from './rooms-disponibles.component';

describe('RoomsDisponiblesComponent', () => {
  let component: RoomsDisponiblesComponent;
  let fixture: ComponentFixture<RoomsDisponiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsDisponiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
