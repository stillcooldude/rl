import { Component, OnInit, Input } from '@angular/core';
import { SegmentElement } from '../shared/models/element';

@Component({
  selector: 'segment-editor',
  templateUrl: './segment-editor.component.html',
  styleUrls: ['./segment-editor.component.css']
})
export class SegmentEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  segment: SegmentElement;

}
