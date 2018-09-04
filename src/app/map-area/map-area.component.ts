/// <reference path="/Users/constantine/Repository/rl/node_modules/@types/googlemaps/index.d.ts" />
import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, HostListener } from '@angular/core';
import { ViewDataService } from './../core/service/view-data.service';
import { Marker } from '../shared/models/marker';
import { MapService } from '../core/service/map.service';

@Component({
  selector: 'map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent implements OnInit {
  path = "../../assets/img/redFlag.png";
  @ViewChild('gmap') mapCanvas: any;
  map: google.maps.Map;

  constructor(private viewData: ViewDataService, private mapService: MapService) {
  }

  ngOnInit() {
    this.map = this.viewData.setMap(new google.maps.Map(this.mapCanvas.nativeElement, this.viewData.mapOptions));

    this.map.addListener('click', (event) => {
      this.mapService.addMarker(event);
    });
  }

  //for elements refreshing
  @HostListener('click')
  async someEvent() {
      setTimeout(() => { }, 100);
  }

  remove() {
    this.viewData.sectionStorage.removeAll();
    this.viewData.markerStorage.markers = [];
    this.viewData.markerType = "start";
  }

  //move code below to another component
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  followRoad(value: boolean) {
    this.viewData.followRoad = value;
  }

  setMarkerType(type: string) {
    this.viewData.markerType = type;
  }
  enable = true;
  enableMarkerType() {
    return this.viewData.markerStorage.length > 1;
  }

  undo() {
    if (this.viewData.markerStorage.last.type === "inter") {
      this.viewData.markerStorage.removeLast();
      this.viewData.sectionStorage.removeLast();
    }
  }
}