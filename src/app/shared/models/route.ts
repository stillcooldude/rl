///<reference path="/Users/constantine/Workspace/Repository/tour-logistic/ClientApp/node_modules/@types/googlemaps/index.d.ts" />

import { Segment } from "./segment";

// import { } from '@types/googlemaps';

export class Route {
    name: string;
    segments: Segment[] = [];

    constructor(){ }
}