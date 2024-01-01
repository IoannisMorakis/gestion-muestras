import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsNewComponent } from './clients-new.component';

describe('ClientsNewComponent', () => {
  let component: ClientsNewComponent;
  let fixture: ComponentFixture<ClientsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsNewComponent]
    });
    fixture = TestBed.createComponent(ClientsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
