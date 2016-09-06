import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { TestBrushZoom2Component } from './d3-tests/test-brush-zoom-2/test-brush-zoom-2.component';
import { TestVoronoiSpirals3Component } from './d3-tests/test-voronoi-spirals-3/test-voronoi-spirals-3.component';
import { TestDragZoom2Component } from './d3-tests/test-drag-zoom-2/test-drag-zoom-2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBrushZoom2Component,
    TestVoronoiSpirals3Component,
    TestDragZoom2Component
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
