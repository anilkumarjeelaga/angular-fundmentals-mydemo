import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdowmParentWithTempRefVarComponent } from './countdowm-parent-with-temp-ref-var.component';

describe('CountdowmParentWithTempRefVarComponent', () => {
  let component: CountdowmParentWithTempRefVarComponent;
  let fixture: ComponentFixture<CountdowmParentWithTempRefVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdowmParentWithTempRefVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdowmParentWithTempRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
