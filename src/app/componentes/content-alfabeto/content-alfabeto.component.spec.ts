import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAlfabetoComponent } from './content-alfabeto.component';

describe('ContentAlfabetoComponent', () => {
  let component: ContentAlfabetoComponent;
  let fixture: ComponentFixture<ContentAlfabetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentAlfabetoComponent]
    });
    fixture = TestBed.createComponent(ContentAlfabetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
