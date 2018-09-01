import { Segment } from "./segment";
import { Section } from "./section";

export abstract class Element {
    constructor(public type: string, public item) { }
}

export class PointElement extends Element {
    constructor(section: Section)  {
        super ("point",section);
    }
}

export class SegmentElement extends Element {
    constructor(segment: Segment) {
        super ("segment",segment);
    }
}
