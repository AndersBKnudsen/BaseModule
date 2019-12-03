import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiagnosisSelectorComponent} from './diagnosis-selector.component';

describe('DiagnosisSelectorComponent', () => {
  let component: DiagnosisSelectorComponent;
  let fixture: ComponentFixture<DiagnosisSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosisSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
