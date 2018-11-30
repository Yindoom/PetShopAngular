import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpetsComponent } from './showpets.component';

describe('ShowpetsComponent', () => {
  let component: ShowpetsComponent;
  let fixture: ComponentFixture<ShowpetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
