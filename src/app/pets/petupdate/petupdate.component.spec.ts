import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetupdateComponent } from './petupdate.component';

describe('PetupdateComponent', () => {
  let component: PetupdateComponent;
  let fixture: ComponentFixture<PetupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
