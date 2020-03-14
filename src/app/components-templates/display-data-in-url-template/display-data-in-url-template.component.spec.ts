import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataInUrlTemplateComponent } from './display-data-in-url-template.component';

describe('DisplayDataInUrlTemplateComponent', () => {
  let component: DisplayDataInUrlTemplateComponent;
  let fixture: ComponentFixture<DisplayDataInUrlTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDataInUrlTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataInUrlTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
