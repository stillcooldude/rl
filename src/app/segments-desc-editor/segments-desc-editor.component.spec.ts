import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsDescEditorComponent } from './segments-desc-editor.component';

describe('SegmentsDescEditorComponent', () => {
  let component: SegmentsDescEditorComponent;
  let fixture: ComponentFixture<SegmentsDescEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsDescEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsDescEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
