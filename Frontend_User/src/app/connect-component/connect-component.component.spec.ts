import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectComponentComponent } from './connect-component.component';

describe('ConnectComponentComponent', () => {
  let component: ConnectComponentComponent;
  let fixture: ComponentFixture<ConnectComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectComponentComponent]
    });
    fixture = TestBed.createComponent(ConnectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
