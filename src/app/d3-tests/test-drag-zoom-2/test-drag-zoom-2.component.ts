/**
 * This component is an adaptation of the "Drag & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084
 */

import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

import { D3Service, D3, D3DragEvent, D3ZoomEvent, Selection } from 'd3-ng2-service';
import { phyllotaxis, PhyllotaxisPoint } from '../shared';

@Component({
  selector: 'app-test-drag-zoom-2',
  templateUrl: './test-drag-zoom-2.component.html',
  styleUrls: ['./test-drag-zoom-2.component.css']
})
export class TestDragZoom2Component implements OnInit, OnDestroy {

  private d3: D3;
  private parentNativeElement: any;


  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    let svg: Selection<SVGSVGElement, any, any, any>;

    d3ParentElement = d3.select(this.parentNativeElement);

    svg = d3ParentElement.select<SVGSVGElement>('svg');

    svg.selectAll('*').remove();
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    let svg: Selection<SVGSVGElement, any, any, any>;
    let g: Selection<SVGGElement, any, any, any>;
    let points: PhyllotaxisPoint[];
    let width: number;
    let height: number;

    function zoomed(this: SVGSVGElement) {
      let e = <D3ZoomEvent<SVGSVGElement, any>>d3.event;
      g.attr('transform', e.transform.toString());
    }

    function dragged(this: SVGCircleElement, d: PhyllotaxisPoint) {
      let e = <D3DragEvent<SVGCircleElement, PhyllotaxisPoint, PhyllotaxisPoint>>d3.event;
      d3.select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
    }

    if (this.parentNativeElement !== null) {


      d3ParentElement = d3.select(this.parentNativeElement);

      svg = d3ParentElement.select<SVGSVGElement>('svg');

      width = +svg.attr('width');
      height = +svg.attr('height');

      points = d3.range(2000).map(phyllotaxis(width, height, 10));

      g = svg.append<SVGGElement>('g');

      g.selectAll<SVGCircleElement, any>('circle')
        .data(points)
        .enter().append<SVGCircleElement>('circle')
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', 2.5)
        .call(d3.drag<SVGCircleElement, PhyllotaxisPoint>().on('drag', dragged));

      svg.call(d3.zoom<SVGSVGElement, any>()
        .scaleExtent([1 / 2, 8])
        .on('zoom', zoomed));
    }

  }

}
