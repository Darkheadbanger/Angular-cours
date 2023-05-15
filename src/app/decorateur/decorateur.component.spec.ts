import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorateurComponent } from './decorateur.component';

describe('DecorateurComponent', () => {
  let component: DecorateurComponent;
  let fixture: ComponentFixture<DecorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
