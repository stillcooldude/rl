/// <reference path="C:/Users/Dude/tour-logistic/node_modules/@types/googlemaps/index.d.ts" />

import { Segment } from "./segment";
import { Section } from "./section";

// import { } from '@types/googlemaps';

export class SegmentStorage {

    segments: Segment[] = [];
    map: google.maps.Map;
    
    constructor() {
    }

    public init(map: google.maps.Map) {
        this.map = map;
        // this.segments.push(new Segment("Segment #1"));
        this.addNext();
    }

    pushSection(section: Section) {
        section.setMap(this.map);
        this.last.push(section);
    }

    addNext() {
        this.segments.push(new Segment(`Segment #${this.segments.length + 1}`));
    }

    get last(): Segment {
        return this.segments[this.segments.length - 1];
    }

    get penult(): Segment {
        return this.segments[this.segments.length - 2];
    }

    get lastSection(): Section {
        if (this.last.length == 0) {
            return this.penult.last;
        }
        if (this.last.length > 0) {
            return this.last.last;
        }
    }

    //****** it's unbelievable ******
    get penultSection(): Section {
        if (this.last.length == 0) {
            return this.penult.penult;
        } else if (this.last.length > 1) {
            return this.last.penult;
        } else return this.penult.last;
    }

    get distance(): number {
        let result = 0;
        this.segments.forEach(value => {
            if (value.distance) {
                result += value.distance;
            }
        });
        return result;
    }
}