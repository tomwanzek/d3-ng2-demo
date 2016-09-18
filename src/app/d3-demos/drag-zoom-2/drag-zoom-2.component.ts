/**
 * This component is an adaptation of the "Drag & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084
 *
 * The implementation has been modified to illustrate the use of inputs to control
 * the layout of the D3 visualization.
 */

import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

import { D3Service, D3, D3DragEvent, D3ZoomEvent, Selection } from 'd3-ng2-service';
import { phyllotaxis, PhyllotaxisPoint } from '../shared';


@Component({
  selector: 'app-drag-zoom-2',
  template: '<svg></svg>'
})
export class DragZoom2Component implements OnInit, OnChanges, OnDestroy {

  @Input() width: number = 400;
  @Input() height: number = 400;
  @Input() phylloRadius: number = 7;
  @Input() pointRadius: number = 2;

  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  private d3G: Selection<SVGGElement, any, null, undefined>;
  private points: PhyllotaxisPoint[];

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (
      (changes['width'] && !changes['width'].isFirstChange()) ||
      (changes['height'] && !changes['height'].isFirstChange()) ||
      (changes['phylloRadius'] && !changes['phylloRadius'].isFirstChange()) ||
      (changes['pointRadius'] && !changes['pointRadius'].isFirstChange())
    ) {
      if (this.d3Svg.empty && !this.d3Svg.empty()) {
        this.changeLayout();
      }
    }

  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;


    function zoomed(this: SVGSVGElement) {
      let e: D3ZoomEvent<SVGSVGElement, any> = d3.event;
      d3G.attr('transform', e.transform.toString());
    }

    function dragged(this: SVGCircleElement, d: PhyllotaxisPoint) {
      let e: D3DragEvent<SVGCircleElement, PhyllotaxisPoint, PhyllotaxisPoint> = d3.event;
      d3.select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
    }

    if (this.parentNativeElement !== null) {


      d3ParentElement = d3.select(this.parentNativeElement);

      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      this.d3Svg.attr('width', this.width);
      this.d3Svg.attr('height', this.height);

      this.points = d3.range(2000).map(phyllotaxis(this.width, this.height, this.phylloRadius));

      d3G = this.d3G = this.d3Svg.append<SVGGElement>('g');

      this.d3G.selectAll<SVGCircleElement, any>('circle')
        .data(this.points)
        .enter().append<SVGCircleElement>('circle')
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', this.pointRadius)
        .call(d3.drag<SVGCircleElement, PhyllotaxisPoint>().on('drag', dragged));

      this.d3Svg.call(d3.zoom<SVGSVGElement, any>()
        .scaleExtent([1 / 2, 8])
        .on('zoom', zoomed));
    }

  }

  private changeLayout() {
    this.d3Svg
      .attr('width', this.width)
      .attr('height', this.height);
    this.points = this.d3.range(2000).map(phyllotaxis(this.width, this.height, this.phylloRadius));

    this.d3G.selectAll<SVGCircleElement, PhyllotaxisPoint>('circle')
      .data(this.points)
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; })
      .attr('r', this.pointRadius);

  }

}
