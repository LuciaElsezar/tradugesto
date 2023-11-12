import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTraductorComponent } from './content-traductor.component';

describe('ContentTraductorComponent', () => {
  let component: ContentTraductorComponent;
  let fixture: ComponentFixture<ContentTraductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTraductorComponent]
    });
    fixture = TestBed.createComponent(ContentTraductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
