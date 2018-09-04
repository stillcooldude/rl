/// <reference path="/Users/constantine/Repository/rl/node_modules/@types/googlemaps/index.d.ts" />
// import { } from '@types/googlemaps';

export class Marker {
    
    arrival;
    rest;
    departure;
    comment;
    gInstance: google.maps.Marker;

    constructor(public name, public location: google.maps.LatLng,public type){
    }

    setArrival(arrivalTime){
        this.arrival = arrivalTime; 
    }
    setRest(restTime){
        this.rest = restTime;
    }
    setDeparture(departureTime){
        this.departure = departureTime;
    }
    setComment(comment){
        this.comment = comment;
    }    
    rmGoogleInstance(){
        this.gInstance.setMap(null);
    } 
    setGoogleInstance(markerOptions: google.maps.MarkerOptions){
        this.gInstance =  new google.maps.Marker(markerOptions);
    }

    toJSON(){
        return {
            name: this.name,
            location: this.location,
            type: this.type,
            arrival: this.arrival,
            departure: this.departure,
            rest: this.rest,
            comment: this.comment
        };
    }

}