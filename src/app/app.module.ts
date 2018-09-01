import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { ViewDataService } from './core/service/view-data.service';
import { MapService } from './core/service/map.service';
import { MarkerStorage } from './shared/models/markerStorage';
import { SectionStorage } from './shared/models/sectionStorage';
import { SegmentStorage } from './shared/models/segmentStorage';
import { SegmentsDescEditorComponent } from './segments-desc-editor/segments-desc-editor.component';
import { SegmentEditorComponent } from './segment-editor/segment-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapAreaComponent,
    SegmentsDescEditorComponent,
    SegmentEditorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ViewDataService,
    MapService,
    MarkerStorage,
    SectionStorage,
    SegmentStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
