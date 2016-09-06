/**
 * This component is an adaptation of the "Brush & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/f48fcdb929a620ed97877e4678ab15e6
 */

import { Component, ElementRef, OnInit } from '@angular/core';

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
  selector: 'app-test-brush-zoom-2',
  templateUrl: './test-brush-zoom-2.component.html',
  styleUrls: ['./test-brush-zoom-2.component.css']
})
export class TestBrushZoom2Component implements OnInit {

  private d3: D3;
  private parentNativeElement: any;


  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {

    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    let svg: Selection<SVGSVGElement, any, any, any>;
    let g: Selection<SVGGElement, any, any, any>;
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
          return idleTimeout = setTimeout(idled, idleDelay);
        }
        x.domain(x0);
        y.domain(y0);
      } else {
        x.domain([s[0][0], s[1][0]].map(x.invert, x));
        y.domain([s[1][1], s[0][1]].map(y.invert, y));
        svg.select<SVGGElement>('.brush').call(brush.move, null);
      }
      zoom();
    }

    function idled() {
      idleTimeout = null;
    }

    function zoom() {
      // HACK: Define transition againt Group Element type `any`
      // This way it can be reused on SVGGElement and SVGCircleElement, although
      // it was defined on the SVGSVGElement.
      // TODO: Double check, if definitions for Selection.transition(...) should be relaxed,
      // to allow Transition<any, any, any, any> as input
      let t: Transition<any, any, any, any> = svg.transition().duration(750);
      svg.select<SVGGElement>('.axis--x').transition(t).call(xAxis);
      svg.select<SVGGElement>('.axis--y').transition(t).call(yAxis);
      svg.selectAll<SVGCircleElement, [number, number, number]>('circle').transition(t)
        .attr('cx', function (d) { return x(d[0]); })
        .attr('cy', function (d) { return y(d[1]); });
    }


    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement);
      svg = d3ParentElement.select<SVGSVGElement>('svg');

      width = +svg.attr('width');
      height = +svg.attr('height');

      g = svg.append<SVGGElement>('g');

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

      svg.selectAll<SVGCircleElement, any>('circle')
        .data(points)
        .enter().append<SVGCircleElement>('circle')
        .attr('cx', function (d) { return x(d[0]); })
        .attr('cy', function (d) { return y(d[1]); })
        .attr('r', 2.5)
        .attr('fill', function (d) { return z(d[2]); });

      svg.append<SVGGElement>('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + (height - 10) + ')')
        .call(xAxis);

      svg.append<SVGGElement>('g')
        .attr('class', 'axis axis--y')
        .attr('transform', 'translate(10,0)')
        .call(yAxis);

      svg.selectAll('.domain')
        .style('display', 'none');

      svg.append<SVGGElement>('g')
        .attr('class', 'brush')
        .call(brush);


    }


  }

}
