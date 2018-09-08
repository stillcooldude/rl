/// <reference path="/Users/constantine/Repository/rl/node_modules/@types/googlemaps/index.d.ts" />

import { Marker } from "./marker";

// import { } from '@types/googlemaps';

export class Section {
    path: google.maps.LatLng[] = [];
    markerType: string;
    polyline;
    map: google.maps.Map;
    distance:number;
    time;
    comment;

    constructor(public marker: Marker, public polylineOptions?: google.maps.PolylineOptions) {
    }
    
    setMap(map: google.maps.Map){
        this.map = map;
    }

    setPath(path) {
        this.path = path;
        return this;
    }

    setDistance(distance:number){
        this.distance = distance;
        return this;
    }

    show() {
        this.polylineOptions.path = this.path;
        this.polylineOptions.map = this.map;
        this.polyline = new google.maps.Polyline(this.polylineOptions);
    };
    remove() {
        if (this.polyline){
            this.polyline.setMap(null);
            this.marker.rmGoogleInstance();
        }
        else {
            this.marker.rmGoogleInstance();
        }
    };
    
    toJSON(){
        var object = {
            marker: this.marker,
            path: this.path,
            distance: this.distance
        }
        if(this.comment) {
            object["comment"] = this.comment;
        }
        if(this.time) {
            object["time"] = this.time;
        }
        return object;
    }
}