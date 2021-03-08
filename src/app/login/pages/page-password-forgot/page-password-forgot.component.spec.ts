import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePasswordForgotComponent } from './page-password-forgot.component';

describe('PagePasswordForgotComponent', () => {
  let component: PagePasswordForgotComponent;
  let fixture: ComponentFixture<PagePasswordForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePasswordForgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePasswordForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
