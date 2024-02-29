import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientComponent } from './httpclient.component';

describe('HttpclientComponent', () => {
  let component: HttpclientComponent;
  let fixture: ComponentFixture<HttpclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpclientComponent]
    });
    fixture = TestBed.createComponent(HttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
