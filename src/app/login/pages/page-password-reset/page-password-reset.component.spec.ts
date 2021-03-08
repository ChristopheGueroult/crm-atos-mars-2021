import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePasswordResetComponent } from './page-password-reset.component';

describe('PagePasswordResetComponent', () => {
  let component: PagePasswordResetComponent;
  let fixture: ComponentFixture<PagePasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePasswordResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
