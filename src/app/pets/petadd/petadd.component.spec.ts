import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaddComponent } from './petadd.component';

describe('PetaddComponent', () => {
  let component: PetaddComponent;
  let fixture: ComponentFixture<PetaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
