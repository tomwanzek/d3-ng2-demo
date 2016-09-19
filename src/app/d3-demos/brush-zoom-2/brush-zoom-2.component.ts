/**
 * This component is an adaptation of the "Brush & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/f48fcdb929a620ed97877e4678ab15e6
 */

import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';


import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition
} from 'd3-ng2-service';


@Component({
  selector: 'app-brush-zoom-2',
  template: '<svg width="960" height="600"></svg>'
})
export class BrushZoom2Component implements OnInit, OnDestroy {
  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {
    let self = this;
    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3Svg: Selection<SVGSVGElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    let width: number;
    let height: number;
    let random: () => number;
    let sqrt3: number;
    let points0: Array<[number, number, number]>;
    let points1: Array<[number, number, number]>;
    let points2: Array<[number, number, number]>;
    let points: Array<[number, number, number]>;
    let k: number;
    let x0: [number, number];
    let y0: [number, number];
    let x: ScaleLinear<number, number>;
    let y: ScaleLinear<number, number>;
    let z: ScaleOrdinal<number, string>;
    let xAxis: Axis<number>;
    let yAxis: Axis<number>;
    let brush: BrushBehavior<any>;
    let idleTimeout: number | null;
    let idleDelay: number;

    function brushended(this: SVGGElement) {
      let e = <D3BrushEvent<any>>d3.event;
      let s: BrushSelection = e.selection;
      if (!s) {
        if (!idleTimeout) {
          self.ngZone.runOutsideAngular(() => {
            idleTimeout = window.setTimeout(idled, idleDelay);
          });
          return idleTimeout;
        }
        x.domain(x0);
        y.domain(y0);
      } else {
        x.domain([s[0][0], s[1][0]].map(x.invert, x));
        y.domain([s[1][1], s[0][1]].map(y.invert, y));
        d3Svg.select<SVGGElement>('.brush').call(brush.move, null);
      }
      zoom();
    }

    function idled() {
      idleTimeout = null;
    }

    function zoom() {
      let t: Transition<SVGSVGElement, any, null, undefined> = d3Svg.transition().duration(750);
      d3Svg.select<SVGGElement>('.axis--x').transition(t).call(xAxis);
      d3Svg.select<SVGGElement>('.axis--y').transition(t).call(yAxis);
      d3Svg.selectAll<SVGCircleElement, [number, number, number]>('circle').transition(t)
        .attr('cx', function (d) { return x(d[0]); })
        .attr('cy', function (d) { return y(d[1]); });
    }


    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement);
      d3Svg = this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      width = +d3Svg.attr('width');
      height = +d3Svg.attr('height');

      d3G = d3Svg.append<SVGGElement>('g');
      random = d3.randomNormal(0, 0.2);
      sqrt3 = Math.sqrt(3);
      points0 = d3.range(300).map(function (): [number, number, number] { return [random() + sqrt3, random() + 1, 0]; });
      points1 = d3.range(300).map(function (): [number, number, number] { return [random() - sqrt3, random() + 1, 1]; });
      points2 = d3.range(300).map(function (): [number, number, number] { return [random(), random() - 1, 2]; });
      points = d3.merge([points0, points1, points2]);


      k = height / width;
      x0 = [-4.5, 4.5];
      y0 = [-4.5 * k, 4.5 * k];
      x = d3.scaleLinear().domain(x0).range([0, width]);
      y = d3.scaleLinear().domain(y0).range([height, 0]);
      z = d3.scaleOrdinal<number, string>(d3.schemeCategory10);

      xAxis = d3.axisTop<number>(x).ticks(12);
      yAxis = d3.axisRight<number>(y).ticks(12 * height / width);

      brush = d3.brush().on('end', brushended);
      idleDelay = 350;

      d3Svg.selectAll<SVGCircleElement, any>('circle')
        .data(points)
        .enter().append<SVGCircleElement>('circle')
        .attr('cx', function (d) { return x(d[0]); })
        .attr('cy', function (d) { return y(d[1]); })
        .attr('r', 2.5)
        .attr('fill', function (d) { return z(d[2]); });

      d3Svg.append<SVGGElement>('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + (height - 10) + ')')
        .call(xAxis);

      d3Svg.append<SVGGElement>('g')
        .attr('class', 'axis axis--y')
        .attr('transform', 'translate(10,0)')
        .call(yAxis);

      d3Svg.selectAll('.domain')
        .style('display', 'none');

      d3Svg.append<SVGGElement>('g')
        .attr('class', 'brush')
        .call(brush);

    }

  }

}
