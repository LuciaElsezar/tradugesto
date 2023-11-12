import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDiccionarioComponent } from './content-diccionario.component';

describe('ContentDiccionarioComponent', () => {
  let component: ContentDiccionarioComponent;
  let fixture: ComponentFixture<ContentDiccionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentDiccionarioComponent]
    });
    fixture = TestBed.createComponent(ContentDiccionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
