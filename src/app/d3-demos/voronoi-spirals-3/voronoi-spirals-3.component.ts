/**
 * This component is an adaptation of the "Voronoi Spirals III" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/c677b9bb3c926ba13f3a902acb006b0c
 */

import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

import { D3Service, D3, RGBColor, Selection, Timer, VoronoiPolygon } from 'd3-ng2-service';

@Component({
  selector: 'app-voronoi-spirals-3',
  template: '<canvas width="400" height="400"></canvas>'
})
export class VoronoiSpirals3Component implements OnInit, OnDestroy {

  private d3: D3;
  private parentNativeElement: any;
  private timer: Timer;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      this.timer.stop();
    });
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    let width: number;
    let height: number;
    let sites: Array<[number, number]>;
    let cells: Array<VoronoiPolygon<[number, number]>>;
    let formatHex: (n: number) => string;
    let colors: Array<RGBColor>;

    function drawCell(cell: VoronoiPolygon<[number, number]>): void {
      context.moveTo(cell[0][0], cell[0][1]);
      for (let i = 1, n = cell.length; i < n; ++i) {
        context.lineTo(cell[i][0], cell[i][1]);
      }
      context.closePath();
    }

    function distance(a: [number, number], b: [number, number]): number {
      let dx = a[0] - b[0], dy = a[1] - b[1];
      return Math.sqrt(dx * dx + dy * dy);
    }

    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement);
      canvas = d3ParentElement.select<HTMLCanvasElement>('canvas').node();

      width = canvas.width;
      height = canvas.height;

      context = canvas.getContext('2d');

      sites = d3.range(100).map(function (): [number, number] { return [Math.random() * width, Math.random() * height]; });

      cells = d3.voronoi().size([width, height]).polygons(sites);
      formatHex = d3.format('02x');

      colors = d3.range(256)
        .map(d3.scaleSequential(d3.interpolateRainbow).domain([0, 255]))
        .map(function (c) { return d3.rgb(c); });

      for (let i = 0; i < 256; ++i) {
        context.beginPath();
        cells.forEach(function (cell: VoronoiPolygon<[number, number]>) {
          drawCell(cell);
          let p0 = cell.shift();
          let p1 = cell[0];
          let t = Math.min(0.5, 4 / distance(p0, p1));
          let p2: [number, number] = [p0[0] * (1 - t) + p1[0] * t, p0[1] * (1 - t) + p1[1] * t];
          cell.push(p2);
        });
        context.fillStyle = '#' + formatHex(i) + '0000';
        context.fill();
      }

      let source = context.getImageData(0, 0, width, height).data,
        targetBuffer = context.createImageData(width, height),
        target = targetBuffer.data;

      for (let i = 0, y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x, i += 4) {
          target[i + 0] =
            target[i + 1] =
            target[i + 2] =
            target[i + 3] = 255;
        }
      }

      context.clearRect(0, 0, width, height);

      this.ngZone.runOutsideAngular(() => {
        this.timer = d3.timer(function (elapsed) {
          for (let i = 0, y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x, i += 4) {
              let c = colors[Math.floor(source[i] + elapsed / 10) % 256];
              target[i + 0] = c.r;
              target[i + 1] = c.g;
              target[i + 2] = c.b;
            }
          }
          context.putImageData(targetBuffer, 0, 0);
        });
      });

    }
  }

}
