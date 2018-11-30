import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOwnersComponent } from './show-owners.component';

describe('ShowOwnersComponent', () => {
  let component: ShowOwnersComponent;
  let fixture: ComponentFixture<ShowOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
