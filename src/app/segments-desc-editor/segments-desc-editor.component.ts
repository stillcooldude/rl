import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapService } from '../core/service/map.service';
import { Segment } from '../shared/models/segment';
import { ViewDataService } from '../core/service/view-data.service';
import { Element, PointElement, SegmentElement } from '../shared/models/element';

@Component({
  selector: 'segments-desc-editor',
  templateUrl: './segments-desc-editor.component.html',
  styleUrls: ['./segments-desc-editor.component.css']
})
export class SegmentsDescEditorComponent implements OnInit {

  elements = [];
  isRouteFinished = false;

  constructor(private viewData: ViewDataService, private mapService: MapService) { }

  ngOnInit() {
    this.mapService.elementCreated.subscribe(value => {
      this.elementsChanged(value);
    })
    this.mapService.isRouteFinished.subscribe(value => {
      this.isRouteFinished = value;
      console.log(value);
    })
  }

  elementsChanged(element) {
    if (element instanceof (Segment)) {
      this.elements.push(new SegmentElement(element));
      if (element.last.marker.type === "finish") {
        this.elements.push(new PointElement(element.last));
      }
    } else if (element.marker.type === "start") {
      this.elements.push(new PointElement(element));
    }
    console.log(element);
  }

  elementClicked(event){
    console.log(event);
  }

  saveRoute(){
    console.log(JSON.stringify(this.viewData.segmentStorage));
  }
}