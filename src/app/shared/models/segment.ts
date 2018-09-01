/// <reference path="C:/Users/Dude/tour-logistic/node_modules/@types/googlemaps/index.d.ts" />

import { Section } from "./section";

// import { } from '@types/googlemaps';


export class Segment {
    
    comment: string;
    sections: Section[];

    constructor(public name: string){
        this.sections = [];
    }


    push(section: Section){
        this.sections.push(section);
    }

    removeLast(){
        this.sections.pop().remove();
    }

    removeAll(){
        this.sections.forEach((section) => {
            section.remove();
        })
    }

    get first(): Section{
        return this.sections[0]; 
    }
    get last(): Section{
        return this.sections[this.sections.length - 1];
    }
    get penult(): Section{
        return this.sections[this.sections.length - 2];
    }
    get length(): number{
        return this.sections.length;
    }
    get distance(): number{
        let result = 0;
        this.sections.forEach(value => {
            if(value.distance){
                result += value.distance
            }
        });
        return result;
    }

    // constructor(id,sections){
    //     this.id = id;
    //     this.name = $`snippet #${id}`;
    //     this.sections = sections;
    //     this.comment = "";
    //     this.distance = sections.distance;//TODO: implement this!
    //     this.startPoint = sections.startPoint;//TODO: implement this!
    //     this.endPoint = sections.endPoint;//TODO: implement this!
    // }
}