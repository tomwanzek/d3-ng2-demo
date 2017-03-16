import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { BrushZoom2Component } from './d3-demos/brush-zoom-2/brush-zoom-2.component';
import { DragZoom2Component } from './d3-demos/drag-zoom-2/drag-zoom-2.component';
import { VoronoiSpirals3Component } from './d3-demos/voronoi-spirals-3/voronoi-spirals-3.component';
import { WrapperBrushZoom2Component } from './d3-demos/wrapper-brush-zoom-2/wrapper-brush-zoom-2.component';
import { WrapperDragZoom2Component } from './d3-demos/wrapper-drag-zoom-2/wrapper-drag-zoom-2.component';
import { WrapperVoronoiSpirals3Component } from './d3-demos/wrapper-voronoi-spirals-3/wrapper-voronoi-spirals-3.component';
import { CollapsibleTreeComponent } from './d3-demos/collapsible-tree/collapsible-tree.component';
import { WrapperCollapsibleTreeComponent } from './d3-demos/wrapper-collapsible-tree/wrapper-collapsible-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    BrushZoom2Component,
    DragZoom2Component,
    VoronoiSpirals3Component,
    WrapperBrushZoom2Component,
    WrapperDragZoom2Component,
    WrapperVoronoiSpirals3Component,
    CollapsibleTreeComponent,
    WrapperCollapsibleTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
