import { Component, OnInit, Input } from '@angular/core';
import { PointElement } from '../shared/models/element';

@Component({
  selector: 'point-editor',
  templateUrl: './point-editor.component.html',
  styleUrls: ['./point-editor.component.css']
})
export class PointEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('point') pointElement: PointElement;

  onClick(){
    console.log(this.pointElement);
  }

}
