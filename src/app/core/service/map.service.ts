/// <reference path="/Users/constantine/Repository/rl/node_modules/@types/googlemaps/index.d.ts" />
import { Injectable, EventEmitter } from '@angular/core';
import { Marker } from 'src/app/shared/models/marker';
import { ViewDataService } from './view-data.service';
import { Section } from '../../shared/models/section';
import { MarkerStorage } from '../../shared/models/markerStorage';
import { Segment } from '../../shared/models/segment';
import { Element } from '../../shared/models/element';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  directionsService: google.maps.DirectionsService;
  elementCreated = new EventEmitter(true);
  
  constructor(private viewData: ViewDataService) {
    this.directionsService = new google.maps.DirectionsService();
  }

  public addMarker(event) {
    var location: google.maps.LatLng = event.latLng;

    let marker = new Marker(`Point #${this.viewData.markerStorage.pointCounter}`, location, this.viewData.markerType);
    this.populateMarker(marker);

    //possibly not necessary 
    this.viewData.markerStorage.push(marker);

    if (this.viewData.markerType !== "start") {
      let section = new Section(marker, this.viewData.polylineOptions);

      if(this.viewData.markerType !== "inter"){
        this.viewData.segmentStorage.pushSection(section);
        this.elementCreated.emit(this.viewData.segmentStorage.last);

        if (this.viewData.markerType === "finish") {
          google.maps.event.clearListeners(this.viewData.map, 'click');
          this.viewData.map.setOptions({ draggableCursor: 'auto' });
          console.log(this.viewData.segmentStorage);
        }
        else {
          this.viewData.markerType = "inter";
          this.viewData.segmentStorage.addNext();
          // console.log(this.viewData.segmentStorage.penultSection);
          // console.log(this.viewData.segmentStorage.lastSection);

        }
        //This should be the generation of an event
        
      }
      else {
        this.viewData.segmentStorage.pushSection(section);
      }
      
      // console.log(this.viewData.segmentStorage.lastSection);
      this.populateSection();
    }
    else {
      this.viewData.segmentStorage.pushSection(new Section(marker));
      this.elementCreated.emit(this.viewData.segmentStorage.lastSection);
      this.viewData.markerType = "inter";
    }
    
  }

  private populateMarker(marker: Marker) {
    var opt: google.maps.MarkerOptions = {
      map: this.viewData.map,
      position: marker.location,
      icon: this.viewData.icon,
    };
    marker.setGoogleInstance(opt);
  }

  private populateSection() {
    if (this.viewData.followRoad) this.setRoad();
    else this.setLine();
  }

  private setRoad() {
    var request = {
      origin: this.viewData.segmentStorage.penultSection.marker.location,
      destination: this.viewData.segmentStorage.lastSection.marker.location,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
      // origin: this.viewData.sectionStorage.penult.marker.location,
      // destination: this.viewData.sectionStorage.last.marker.location,
      // optimizeWaypoints: true,
      // travelMode: google.maps.TravelMode.WALKING,
      //provideRouteAlternatives: true
    };

    this.directionsService.route(request, (response, status) => {
      if (status == google.maps.DirectionsStatus.OK && response) {
        this.viewData.segmentStorage.lastSection
          .setPath(response.routes[0].overview_path)  //array of coords
          .setDistance(response.routes[0].legs[0].distance.value)
          .show();
      }
      // if (status == google.maps.DirectionsStatus.OK && response) {
      //   this.viewData.sectionStorage.last
      //     .setPath(response.routes[0].overview_path)  //array of coords
      //     .setDistance(response.routes[0].legs[0].distance.value)
      //     .show();
      //   console.log(this.viewData.sectionStorage.last);
      //   console.log(response);
      // }
    });

  }

  private setLine() {
    this.viewData.sectionStorage.last
      .setPath([
        this.viewData.markerStorage.penult.location,
        this.viewData.markerStorage.last.location
      ]).show()
      
  }
}
