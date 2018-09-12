/// <reference path="/Users/constantine/Workspace/Repository/tour-logistic/ClientApp/node_modules/@types/googlemaps/index.d.ts" />
import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Marker } from '../../shared/models/marker';
import { MarkerStorage } from '../../shared/models/markerStorage';
import { Section } from '../../shared/models/section';
import { SectionStorage } from '../../shared/models/sectionStorage';
import { SegmentStorage } from '../../shared/models/segmentStorage';


@Injectable({
  providedIn: 'root'
})
export class ViewDataService {

  public map: google.maps.Map;
  latitude = 56.126838;
  longitude = 40.397072;
  public markerType = "start";
  public followRoad = true;

  constructor(public markerStorage: MarkerStorage, public sectionStorage: SectionStorage, public segmentStorage: SegmentStorage) {
  }

  public setMap(map: google.maps.Map): google.maps.Map {
    this.map = map;
    this.sectionStorage.setMap(map);
    this.segmentStorage.init(map);
    return map;
  }

  public get icon() {
    switch (this.markerType) {
      case "inter": return this.interIcon;
      case "checkpoint": return this.checkpointIcon;
      case "finish": return this.finishIcon;
      case "start": return this.startIcon;//event for change switch-button color
    }
  }

  public get mapOptions(): google.maps.MapOptions {
    return {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      scrollwheel: true,
      draggableCursor: 'crosshair',
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
    }
  }

  public get polylineOptions(): google.maps.PolylineOptions {
    return {
      strokeColor: "#f135ff",
      map: this.map,
      strokeWeight: 5,
      strokeOpacity: 0.7,
    }
  }

  interIcon = {
    url: "../../../assets/img/interPoint.png",
    anchor: new google.maps.Point(10, 22),
    // anchor: new google.maps.Point(10, 25),
  };
  checkpointIcon = {
    url: "../../../assets/img/checkpoint.png",
    anchor: new google.maps.Point(15, 23),
    // anchor: new google.maps.Point(10, 25),
  };
  finishIcon = {
    url: "../../assets/img/redFlag.png",
    size: new google.maps.Size(20, 20),
    anchor: new google.maps.Point(3, 20),
  }; v
  startIcon = {
    url: "../../../assets/img/greenFlag.png",
    size: new google.maps.Size(20, 20),
    anchor: new google.maps.Point(3, 20),
  };
}
