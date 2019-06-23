import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeertableComponent } from './beertable.component';

describe('BeertableComponent', () => {
  let component: BeertableComponent;
  let fixture: ComponentFixture<BeertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
