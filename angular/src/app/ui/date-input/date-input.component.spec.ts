import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputComponent } from './date-input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInputComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  it('should init form with empty values', () => {
    const initFormValues = {
      day: '',
      month: '',
      year: ''
    };
    expect(component.form.value).toEqual(initFormValues);
  });

  xdescribe('#value', () => {
    it('should...', () => {
    });
  });

  xdescribe('#writeValue', () => {
    it('should...', () => {
    });
  });

  xdescribe('#registerOnChange', () => {
    it('should...', () => {
    });
  });

  xdescribe('#registerOnTouched', () => {
    it('should...', () => {
    });
  });

  xdescribe('#isValidDate', () => {
    it('should...', () => {
    });
  });

  xdescribe('#ngOnInit', () => {
    it('should...', () => {
    });
  });
});
