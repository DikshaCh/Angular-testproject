import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateFormsComponent } from './tempate-forms.component';

describe('TempateFormsComponent', () => {
  let component: TempateFormsComponent;
  let fixture: ComponentFixture<TempateFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
