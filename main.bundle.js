webpackJsonp([1,4],{

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 227;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(244);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'D3 Angular Demo';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(586),
        styles: [__webpack_require__(581)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3_demos_brush_zoom_2_brush_zoom_2_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__d3_demos_drag_zoom_2_drag_zoom_2_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__d3_demos_voronoi_spirals_3_voronoi_spirals_3_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__d3_demos_wrapper_brush_zoom_2_wrapper_brush_zoom_2_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__d3_demos_wrapper_drag_zoom_2_wrapper_drag_zoom_2_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__d3_demos_wrapper_voronoi_spirals_3_wrapper_voronoi_spirals_3_component__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__d3_demos_brush_zoom_2_brush_zoom_2_component__["a" /* BrushZoom2Component */],
            __WEBPACK_IMPORTED_MODULE_5__d3_demos_drag_zoom_2_drag_zoom_2_component__["a" /* DragZoom2Component */],
            __WEBPACK_IMPORTED_MODULE_6__d3_demos_voronoi_spirals_3_voronoi_spirals_3_component__["a" /* VoronoiSpirals3Component */],
            __WEBPACK_IMPORTED_MODULE_7__d3_demos_wrapper_brush_zoom_2_wrapper_brush_zoom_2_component__["a" /* WrapperBrushZoom2Component */],
            __WEBPACK_IMPORTED_MODULE_8__d3_demos_wrapper_drag_zoom_2_wrapper_drag_zoom_2_component__["a" /* WrapperDragZoom2Component */],
            __WEBPACK_IMPORTED_MODULE_9__d3_demos_wrapper_voronoi_spirals_3_wrapper_voronoi_spirals_3_component__["a" /* WrapperVoronoiSpirals3Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2_d3_ng2_service__["a" /* D3Service */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrushZoom2Component; });
/**
 * This component is an adaptation of the "Brush & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/f48fcdb929a620ed97877e4678ab15e6
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrushZoom2Component = (function () {
    function BrushZoom2Component(element, ngZone, d3Service) {
        this.ngZone = ngZone;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    BrushZoom2Component.prototype.ngOnDestroy = function () {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    };
    BrushZoom2Component.prototype.ngOnInit = function () {
        var self = this;
        var d3 = this.d3;
        var d3ParentElement;
        var d3Svg;
        var d3G;
        var width;
        var height;
        var random;
        var sqrt3;
        var points0;
        var points1;
        var points2;
        var points;
        var k;
        var x0;
        var y0;
        var x;
        var y;
        var z;
        var xAxis;
        var yAxis;
        var brush;
        var idleTimeout;
        var idleDelay;
        function brushended() {
            var e = d3.event;
            var s = e.selection;
            if (!s) {
                if (!idleTimeout) {
                    self.ngZone.runOutsideAngular(function () {
                        idleTimeout = window.setTimeout(idled, idleDelay);
                    });
                    return idleTimeout;
                }
                x.domain(x0);
                y.domain(y0);
            }
            else {
                x.domain([s[0][0], s[1][0]].map(x.invert, x));
                y.domain([s[1][1], s[0][1]].map(y.invert, y));
                d3Svg.select('.brush').call(brush.move, null);
            }
            zoom();
        }
        function idled() {
            idleTimeout = null;
        }
        function zoom() {
            var t = d3Svg.transition().duration(750);
            d3Svg.select('.axis--x').transition(t).call(xAxis);
            d3Svg.select('.axis--y').transition(t).call(yAxis);
            d3Svg.selectAll('circle').transition(t)
                .attr('cx', function (d) { return x(d[0]); })
                .attr('cy', function (d) { return y(d[1]); });
        }
        if (this.parentNativeElement !== null) {
            d3ParentElement = d3.select(this.parentNativeElement);
            d3Svg = this.d3Svg = d3ParentElement.select('svg');
            width = +d3Svg.attr('width');
            height = +d3Svg.attr('height');
            d3G = d3Svg.append('g');
            random = d3.randomNormal(0, 0.2);
            sqrt3 = Math.sqrt(3);
            points0 = d3.range(300).map(function () { return [random() + sqrt3, random() + 1, 0]; });
            points1 = d3.range(300).map(function () { return [random() - sqrt3, random() + 1, 1]; });
            points2 = d3.range(300).map(function () { return [random(), random() - 1, 2]; });
            points = d3.merge([points0, points1, points2]);
            k = height / width;
            x0 = [-4.5, 4.5];
            y0 = [-4.5 * k, 4.5 * k];
            x = d3.scaleLinear().domain(x0).range([0, width]);
            y = d3.scaleLinear().domain(y0).range([height, 0]);
            z = d3.scaleOrdinal(d3.schemeCategory10);
            xAxis = d3.axisTop(x).ticks(12);
            yAxis = d3.axisRight(y).ticks(12 * height / width);
            brush = d3.brush().on('end', brushended);
            idleDelay = 350;
            d3Svg.selectAll('circle')
                .data(points)
                .enter().append('circle')
                .attr('cx', function (d) { return x(d[0]); })
                .attr('cy', function (d) { return y(d[1]); })
                .attr('r', 2.5)
                .attr('fill', function (d) { return z(d[2]); });
            d3Svg.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + (height - 10) + ')')
                .call(xAxis);
            d3Svg.append('g')
                .attr('class', 'axis axis--y')
                .attr('transform', 'translate(10,0)')
                .call(yAxis);
            d3Svg.selectAll('.domain')
                .style('display', 'none');
            d3Svg.append('g')
                .attr('class', 'brush')
                .call(brush);
        }
    };
    return BrushZoom2Component;
}());
BrushZoom2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-brush-zoom-2',
        template: '<svg width="960" height="600"></svg>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _c || Object])
], BrushZoom2Component);

var _a, _b, _c;
//# sourceMappingURL=brush-zoom-2.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(238);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragZoom2Component; });
/**
 * This component is an adaptation of the "Drag & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084
 *
 * The implementation has been modified to illustrate the use of inputs to control
 * the layout of the D3 visualization.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragZoom2Component = (function () {
    function DragZoom2Component(element, d3Service) {
        this.width = 400;
        this.height = 400;
        this.phylloRadius = 7;
        this.pointRadius = 2;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    DragZoom2Component.prototype.ngOnChanges = function (changes) {
        if ((changes['width'] && !changes['width'].isFirstChange()) ||
            (changes['height'] && !changes['height'].isFirstChange()) ||
            (changes['phylloRadius'] && !changes['phylloRadius'].isFirstChange()) ||
            (changes['pointRadius'] && !changes['pointRadius'].isFirstChange())) {
            if (this.d3Svg.empty && !this.d3Svg.empty()) {
                this.changeLayout();
            }
        }
    };
    DragZoom2Component.prototype.ngOnDestroy = function () {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    };
    DragZoom2Component.prototype.ngOnInit = function () {
        var d3 = this.d3;
        var d3ParentElement;
        var d3G;
        function zoomed() {
            var e = d3.event;
            d3G.attr('transform', e.transform.toString());
        }
        function dragged(d) {
            var e = d3.event;
            d3.select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
        }
        if (this.parentNativeElement !== null) {
            d3ParentElement = d3.select(this.parentNativeElement);
            this.d3Svg = d3ParentElement.select('svg');
            this.d3Svg.attr('width', this.width);
            this.d3Svg.attr('height', this.height);
            this.points = d3.range(2000).map(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* phyllotaxis */])(this.width, this.height, this.phylloRadius));
            d3G = this.d3G = this.d3Svg.append('g');
            this.d3G.selectAll('circle')
                .data(this.points)
                .enter().append('circle')
                .attr('cx', function (d) { return d.x; })
                .attr('cy', function (d) { return d.y; })
                .attr('r', this.pointRadius)
                .call(d3.drag().on('drag', dragged));
            this.d3Svg.call(d3.zoom()
                .scaleExtent([1 / 2, 8])
                .on('zoom', zoomed));
        }
    };
    DragZoom2Component.prototype.changeLayout = function () {
        this.d3Svg
            .attr('width', this.width)
            .attr('height', this.height);
        this.points = this.d3.range(2000).map(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* phyllotaxis */])(this.width, this.height, this.phylloRadius));
        this.d3G.selectAll('circle')
            .data(this.points)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            .attr('r', this.pointRadius);
    };
    return DragZoom2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], DragZoom2Component.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], DragZoom2Component.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], DragZoom2Component.prototype, "phylloRadius", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], DragZoom2Component.prototype, "pointRadius", void 0);
DragZoom2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-drag-zoom-2',
        template: '<svg></svg>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _b || Object])
], DragZoom2Component);

var _a, _b;
//# sourceMappingURL=drag-zoom-2.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phyllotaxis__ = __webpack_require__(239);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__phyllotaxis__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = phyllotaxis;
// Adapted from phyllotaxis code in https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084
/**
 * A helper function to obtain a generator for a phyllotaxis layout of points
 */
function phyllotaxis(width, height, radius) {
    var theta = Math.PI * (3 - Math.sqrt(5));
    return function (i) {
        var r = radius * Math.sqrt(i), a = theta * i;
        return {
            x: width / 2 + r * Math.cos(a),
            y: height / 2 + r * Math.sin(a)
        };
    };
}
//# sourceMappingURL=phyllotaxis.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoronoiSpirals3Component; });
/**
 * This component is an adaptation of the "Voronoi Spirals III" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/c677b9bb3c926ba13f3a902acb006b0c
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoronoiSpirals3Component = (function () {
    function VoronoiSpirals3Component(element, ngZone, d3Service) {
        this.ngZone = ngZone;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    VoronoiSpirals3Component.prototype.ngOnDestroy = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.timer.stop();
        });
    };
    VoronoiSpirals3Component.prototype.ngOnInit = function () {
        var _this = this;
        var d3 = this.d3;
        var d3ParentElement;
        var canvas;
        var context;
        var width;
        var height;
        var sites;
        var cells;
        var formatHex;
        var colors;
        function drawCell(cell) {
            context.moveTo(cell[0][0], cell[0][1]);
            for (var i = 1, n = cell.length; i < n; ++i) {
                context.lineTo(cell[i][0], cell[i][1]);
            }
            context.closePath();
        }
        function distance(a, b) {
            var dx = a[0] - b[0], dy = a[1] - b[1];
            return Math.sqrt(dx * dx + dy * dy);
        }
        if (this.parentNativeElement !== null) {
            d3ParentElement = d3.select(this.parentNativeElement);
            canvas = d3ParentElement.select('canvas').node();
            width = canvas.width;
            height = canvas.height;
            context = canvas.getContext('2d');
            sites = d3.range(100).map(function () { return [Math.random() * width, Math.random() * height]; });
            cells = d3.voronoi().size([width, height]).polygons(sites);
            formatHex = d3.format('02x');
            colors = d3.range(256)
                .map(d3.scaleSequential(d3.interpolateRainbow).domain([0, 255]))
                .map(function (c) { return d3.rgb(c); });
            for (var i = 0; i < 256; ++i) {
                context.beginPath();
                cells.forEach(function (cell) {
                    drawCell(cell);
                    var p0 = cell.shift();
                    var p1 = cell[0];
                    var t = Math.min(0.5, 4 / distance(p0, p1));
                    var p2 = [p0[0] * (1 - t) + p1[0] * t, p0[1] * (1 - t) + p1[1] * t];
                    cell.push(p2);
                });
                context.fillStyle = '#' + formatHex(i) + '0000';
                context.fill();
            }
            var source_1 = context.getImageData(0, 0, width, height).data, targetBuffer_1 = context.createImageData(width, height), target_1 = targetBuffer_1.data;
            for (var i = 0, y = 0; y < height; ++y) {
                for (var x = 0; x < width; ++x, i += 4) {
                    target_1[i + 0] =
                        target_1[i + 1] =
                            target_1[i + 2] =
                                target_1[i + 3] = 255;
                }
            }
            context.clearRect(0, 0, width, height);
            this.ngZone.runOutsideAngular(function () {
                _this.timer = d3.timer(function (elapsed) {
                    for (var i = 0, y = 0; y < height; ++y) {
                        for (var x = 0; x < width; ++x, i += 4) {
                            var c = colors[Math.floor(source_1[i] + elapsed / 10) % 256];
                            target_1[i + 0] = c.r;
                            target_1[i + 1] = c.g;
                            target_1[i + 2] = c.b;
                        }
                    }
                    context.putImageData(targetBuffer_1, 0, 0);
                });
            });
        }
    };
    return VoronoiSpirals3Component;
}());
VoronoiSpirals3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-voronoi-spirals-3',
        template: '<canvas width="400" height="400"></canvas>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _c || Object])
], VoronoiSpirals3Component);

var _a, _b, _c;
//# sourceMappingURL=voronoi-spirals-3.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrapperBrushZoom2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WrapperBrushZoom2Component = (function () {
    function WrapperBrushZoom2Component() {
    }
    WrapperBrushZoom2Component.prototype.ngOnInit = function () {
    };
    return WrapperBrushZoom2Component;
}());
WrapperBrushZoom2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-wrapper-brush-zoom-2',
        template: __webpack_require__(587),
        styles: [__webpack_require__(582)]
    }),
    __metadata("design:paramtypes", [])
], WrapperBrushZoom2Component);

//# sourceMappingURL=wrapper-brush-zoom-2.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrapperDragZoom2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WrapperDragZoom2Component = (function () {
    function WrapperDragZoom2Component() {
        this.dragZoom2Layouts = [
            {
                name: 'small',
                label: 'Small Visualization',
                width: 400,
                height: 400,
                phylloRadius: 4,
                pointRadius: 2
            },
            {
                name: 'large',
                label: 'Large Visualization',
                width: 600,
                height: 600,
                phylloRadius: 7,
                pointRadius: 4
            }
        ];
    }
    WrapperDragZoom2Component.prototype.ngOnInit = function () {
        if (this.selectedLayout === undefined) {
            this.selectedLayout = this.dragZoom2Layouts[0];
        }
    };
    WrapperDragZoom2Component.prototype.onActiveButtonChange = function (layout) {
        this.selectedLayout = layout;
    };
    return WrapperDragZoom2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], WrapperDragZoom2Component.prototype, "selectedLayout", void 0);
WrapperDragZoom2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-wrapper-drag-zoom-2',
        template: __webpack_require__(588),
        styles: [__webpack_require__(583)]
    })
], WrapperDragZoom2Component);

//# sourceMappingURL=wrapper-drag-zoom-2.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrapperVoronoiSpirals3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WrapperVoronoiSpirals3Component = (function () {
    function WrapperVoronoiSpirals3Component() {
    }
    WrapperVoronoiSpirals3Component.prototype.ngOnInit = function () {
    };
    return WrapperVoronoiSpirals3Component;
}());
WrapperVoronoiSpirals3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-wrapper-voronoi-spirals-3',
        template: __webpack_require__(589),
        styles: [__webpack_require__(584)]
    }),
    __metadata("design:paramtypes", [])
], WrapperVoronoiSpirals3Component);

//# sourceMappingURL=wrapper-voronoi-spirals-3.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, "div.jumbotron {\r\n  background-color: rgb(230, 230, 255);\r\n}\r\n\r\ndiv.jumbotron p {\r\n  font-size: 14px;\r\n}\r\n\r\ndiv.jumbotron img {\r\n  max-height: 400px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nfooter {\r\n  background-color: #222;\r\n  color: #eee;\r\n}\r\n", "", {"version":3,"sources":["C:/Users/TSR/vscode/d3-ng2-demo/src/app/app.component.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;CACtC;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,uBAAuB;EACvB,YAAY;CACb","file":"app.component.css","sourcesContent":["div.jumbotron {\r\n  background-color: rgb(230, 230, 255);\r\n}\r\n\r\ndiv.jumbotron p {\r\n  font-size: 14px;\r\n}\r\n\r\ndiv.jumbotron img {\r\n  max-height: 400px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nfooter {\r\n  background-color: #222;\r\n  color: #eee;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, "div.container {\r\n  background-color: rgb(245, 250, 245);\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ndiv.col {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\nh3 {\r\n  border-bottom: 1px solid #337ab7;\r\n  padding-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ndiv.visualization {\r\n  display: block;\r\n  background-color: white;\r\n  width: intrinsic;\r\n  width: -moz-max-content;\r\n  width: -webkit-max-content;\r\n  max-width: 100%;\r\n  margin: 10px auto 15px auto;\r\n  overflow-x: auto;\r\n}\r\n\r\n", "", {"version":3,"sources":["C:/Users/TSR/vscode/d3-ng2-demo/src/app/d3-demos/wrapper-brush-zoom-2/wrapper-brush-zoom-2.component.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;CACrB;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,iCAAiC;EACjC,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,wBAAwB;EACxB,iBAAiB;EACjB,wBAAwB;EACxB,2BAA2B;EAC3B,gBAAgB;EAChB,4BAA4B;EAC5B,iBAAiB;CAClB","file":"wrapper-brush-zoom-2.component.css","sourcesContent":["div.container {\r\n  background-color: rgb(245, 250, 245);\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ndiv.col {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\nh3 {\r\n  border-bottom: 1px solid #337ab7;\r\n  padding-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ndiv.visualization {\r\n  display: block;\r\n  background-color: white;\r\n  width: intrinsic;\r\n  width: -moz-max-content;\r\n  width: -webkit-max-content;\r\n  max-width: 100%;\r\n  margin: 10px auto 15px auto;\r\n  overflow-x: auto;\r\n}\r\n\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, "div.container {\r\n  background-color: rgb(245, 250, 245);\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ndiv.col {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\nh3 {\r\n  border-bottom: 1px solid #337ab7;\r\n  padding-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ndiv.visualization {\r\n  display: block;\r\n  background-color: white;\r\n  width: intrinsic;\r\n  width: -moz-max-content;\r\n  width: -webkit-max-content;\r\n  max-width: 100%;\r\n  margin: 10px auto 15px auto;\r\n  overflow-x: auto;\r\n}\r\n", "", {"version":3,"sources":["C:/Users/TSR/vscode/d3-ng2-demo/src/app/d3-demos/wrapper-drag-zoom-2/wrapper-drag-zoom-2.component.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;CACrB;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,iCAAiC;EACjC,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,wBAAwB;EACxB,iBAAiB;EACjB,wBAAwB;EACxB,2BAA2B;EAC3B,gBAAgB;EAChB,4BAA4B;EAC5B,iBAAiB;CAClB","file":"wrapper-drag-zoom-2.component.css","sourcesContent":["div.container {\r\n  background-color: rgb(245, 250, 245);\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ndiv.col {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\nh3 {\r\n  border-bottom: 1px solid #337ab7;\r\n  padding-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ndiv.visualization {\r\n  display: block;\r\n  background-color: white;\r\n  width: intrinsic;\r\n  width: -moz-max-content;\r\n  width: -webkit-max-content;\r\n  max-width: 100%;\r\n  margin: 10px auto 15px auto;\r\n  overflow-x: auto;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, "div.container {\r\n  background-color: rgb(245, 250, 245);\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ndiv.col {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\nh3 {\r\n  border-bottom: 1px solid #337ab7;\r\n  padding-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ndiv.visualization {\r\n  display: block;\r\n  background-color: white;\r\n  width: intrinsic;\r\n  width: -moz-max-content;\r\n  width: -webkit-max-content;\r\n  max-width: 100%;\r\n  margin: 10px auto 15px auto;\r\n  overflow-x: auto;\r\n}\r\n", "", {"version":3,"sources":["C:/Users/TSR/vscode/d3-ng2-demo/src/app/d3-demos/wrapper-voronoi-spirals-3/wrapper-voronoi-spirals-3.component.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;CACrB;;AAED;EACE,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,iCAAiC;EACjC,kBAAkB;EAClB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,wBAAwB;EACxB,iBAAiB;EACjB,wBAAwB;EACxB,2BAA2B;EAC3B,gBAAgB;EAChB,4BAA4B;EAC5B,iBAAiB;CAClB","file":"wrapper-voronoi-spirals-3.component.css","sourcesContent":["div.container {\r\n  background-color: rgb(245, 250, 245);\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ndiv.col {\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\nh3 {\r\n  border-bottom: 1px solid #337ab7;\r\n  padding-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ndiv.visualization {\r\n  display: block;\r\n  background-color: white;\r\n  width: intrinsic;\r\n  width: -moz-max-content;\r\n  width: -webkit-max-content;\r\n  max-width: 100%;\r\n  margin: 10px auto 15px auto;\r\n  overflow-x: auto;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <span class=\"navbar-brand\">\r\n        <a href=\"https://github.com/tomwanzek/d3-ng2-demo\">{{title}}</a>\r\n        </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"jumbotron\">\r\n    <h1>Reusable Visual Power?</h1>\r\n    <h3><em>Fuse D3 and Angular in TypeScript (A Demo)</em></h3>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-lg-offset-1\">\r\n        <h4>Perfect Storm</h4>\r\n        <div class=\"text-justify\">\r\n          <p>\r\n            Ever wondered, how to build modern web apps with reusable, interactive data visualization components?\r\n          </p>\r\n          <p>\r\n            The latest incarnation of <b>D3</b> is getting you excited about new destinations.\r\n          </p>\r\n          <p>\r\n            <b>Angular 2</b> arrived on the tarmac and has since been rolled into a stable release management cycle.\r\n          </p>\r\n          <p>\r\n            <b>TypeScript</b> has become the fuel that lets you develop complex solutions at scale.\r\n          </p>\r\n          <p>\r\n            Integrating all three, however, seems as daunting as taking off in the perfect storm.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <!-- insert images -->\r\n        <img src=\"/assets/d3-ng2-demo-screenshots.png\" class=\"img-responsive\" />\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <h4>Take Flight</h4>\r\n        <div class=\"text-justify\">\r\n          <p>\r\n            This Angular demo app and its source code repository are intended to get you started. Rather than trying to be exhaustive\r\n            or writing a lengthy blog post, a select few well-known D3 demo scripts have been adapted to highlight key considerations.\r\n          </p>\r\n          <p>\r\n            Use an Angular Service to inject the power of D3 version 4 into a project.\r\n          </p>\r\n          <p>\r\n            Explore how D3 visualizations can be implemented as Angular components in TypeScript 2.\r\n          </p>\r\n          <p>\r\n            See how a visualization component can change in response to input data changes.\r\n          </p>\r\n          <p>\r\n            Find ways to unit test your D3 components with Karma/Jasmine and check out a worked example end-to-end test using Protractor.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<app-wrapper-brush-zoom-2></app-wrapper-brush-zoom-2>\r\n<app-wrapper-drag-zoom-2></app-wrapper-drag-zoom-2>\r\n<app-wrapper-voronoi-spirals-3></app-wrapper-voronoi-spirals-3>\r\n\r\n<footer class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"col-lg-4\">\r\n        <h3>Source Code Resources for this App</h3>\r\n        <div class=\"well\">\r\n\r\n          <a href=\"https://github.com/tomwanzek/d3-ng2-demo\">Demo App Github Repo</a><br>\r\n          <a href=\"https://github.com/tomwanzek/d3-ng2-service\">D3Service Github Repo</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <h3>D3 Resources</h3>\r\n        <div class=\"well\">\r\n\r\n          <a href=\"https://d3js.org/\">D3 Data Driven Documents (Official Website)</a><br>\r\n          <a href=\"https://github.com/d3/d3\">D3 on Github</a><br>\r\n          <a href=\"https://bl.ocks.org/mbostock\">Mike Bostock's D3 Blocks</a><br>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <h3>Angular Resources</h3>\r\n        <div class=\"well\">\r\n          <a href=\"https://angular.io/\">Angular</a><br>\r\n          <a href=\"https://github.com/angular/angular-cli/\">Angular CLI</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"text-center col-lg-12\">\r\n      <p>\r\n        Copyright &copy; 2017 Thomas Wanzek.\r\n      </p>\r\n      <p>\r\n        <em>Released under MIT License. For details see:</em>\r\n        <a href=\"https://github.com/tomwanzek/d3-ng2-demo/tree/master/LICENSE.txt\">https://github.com/tomwanzek/d3-ng2-demo/tree/master/LICENSE</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-12\">\r\n      <h3 class=\"text-primary\">Brush & Zoom II</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12\">\r\n      <p class=\"text-info\">\r\n        Demonstrate how to:\r\n      </p>\r\n      <ul class=\"text-info\">\r\n        <li>\r\n          build an Angular component which uses a D3 service to render to <code>&lt;svg&gt;</code>, and\r\n        </li>\r\n        <li>\r\n          use D3 version 4 in TypeScript to draw a scatter plot with brush and zoom/pan event handling.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-6 col-md-6 col-sm-12\">\r\n      <h4 class=\"text-primary\">Reference</h4>\r\n      <p class=\"text-justify\">\r\n        This example is based on <b>Mike Bostock's Brush & Zoom II Block</b>. The original source with its supporting explanation\r\n        can be found by following the link below.\r\n      </p>\r\n      <p>\r\n        <em>Source:</em> <a href=\"https://bl.ocks.org/mbostock/f48fcdb929a620ed97877e4678ab15e6\">Brush & Zoom II Block</a>.\r\n      </p>\r\n    </div>\r\n    <div class=\"col col-lg-6 col-md-6 col-sm-12\">\r\n      <h4 class=\"text-primary\">D3 Angular Implementation</h4>\r\n      <p class=\"text-justify\">\r\n        The implementation is a straightforward Angular component without any inputs. Its template is an <code>&lt;svg&gt;</code>        element with fixed dimensions. The component renders the visualization using the <code>d3</code> instance provided\r\n        by the injected <code>D3Service</code>.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The D3 component can be embedded into a parent component using the following tag:\r\n      </p>\r\n      <p>\r\n        <code>&lt;app-brush-zoom-2&gt;&lt;/app-brush-zoom-2&gt;</code>.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The source code for the D3 component can be found at:\r\n      </p>\r\n      <p>\r\n        <a href=\"https://github.com/tomwanzek/d3-ng2-demo/tree/master/src/app/d3-demos/brush-zoom-2\">Brush Zoom II D3 Component</a>.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-12\">\r\n      <div class=\"visualization\">\r\n        <app-brush-zoom-2></app-brush-zoom-2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-12\">\r\n      <h3 class=\"text-primary\">Drag & Zoom II</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12\">\r\n      <p class=\"text-info\">\r\n        Demonstrate how to:\r\n      </p>\r\n      <ul class=\"text-info\">\r\n        <li>\r\n          build an Angular component which uses a D3 service to render to <code>&lt;svg&gt;</code>,\r\n        </li>\r\n        <li>\r\n          use D3 version 4 in TypeScript to handle drag and zoom/pan events, and\r\n        </li>\r\n        <li>\r\n          use Angular to respond to input changes to a reusable D3 component.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-6 col-md-6 col-sm-12\">\r\n      <h4 class=\"text-primary\">Reference</h4>\r\n      <p class=\"text-justify\">\r\n        This example is based on <b>Mike Bostock's Drag & Zoom II Block</b>. The original source with its supporting explanation\r\n        can be found by following the link below.\r\n      </p>\r\n      <p>\r\n        <em>Source:</em> <a href=\"https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084\">Drag & Zoom II Block</a>.\r\n      </p>\r\n    </div>\r\n    <div class=\"col col-lg-6 col-md-6 col-sm-12\">\r\n      <h4 class=\"text-primary\">D3 Angular Implementation</h4>\r\n      <p class=\"text-justify\">\r\n        The implementation is an Angular component with inputs.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The component supports inputs controlling key layout determinants: <em>height</em>, <em>width</em>, the <em>radius of the phyllotaxis layout</em>,\r\n        and the <em>point radius</em>. Its template is a plain <code>&lt;svg&gt;</code> element.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The component renders the visualization using the <code>d3</code> instance provided by the injected <code>D3Service</code>.\r\n        When input values change, the visualization is redrawn.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The D3 component can be embedded into a parent component using the following tag:\r\n      </p>\r\n      <p>\r\n        <code>&lt;app-drag-zoom-2 [width]=\"960\" [height]=\"500\" [phylloRadius]=\"10\" [pointRadius]=\"2.5\"&gt;&lt;/app-drag-zoom-2&gt;</code>.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The numeric example inputs above reflect the choices of the reference source. However, in true Angular manner the component\r\n        is reusable and can obtain input values from parent component properties, as shown below.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The source code for the D3 component and its parent component can be found at:\r\n      </p>\r\n      <p>\r\n        <a href=\"https://github.com/tomwanzek/d3-ng2-demo/tree/master/src/app/d3-demos/drag-zoom-2\">Drag Zoom II D3 Component</a>.\r\n      </p>\r\n      <p>\r\n        <a href=\"https://github.com/tomwanzek/d3-ng2-demo/tree/master/src/app/d3-demos/wrapper-drag-zoom-2\">Drag Zoom II Wrapper Parent Component</a>.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-5 col-md-5 col-sm-12\">\r\n      <div class=\"well well-sm\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-center\">\r\n                <small><em>Choose Layout:</em></small>\r\n                <span class=\"btn-group\">\r\n                  <button class=\"btn btn-primary btn-sm\" *ngFor=\"let layout of dragZoom2Layouts\"\r\n                  (click)=\"onActiveButtonChange(layout)\" [class.active]=\"layout === selectedLayout\" [ngClass]=\"'layout-' + layout.name\">\r\n                    {{layout.name}}\r\n                  </button>\r\n                </span>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th class=\"info\">Width</th>\r\n              <td>{{selectedLayout.width}}</td>\r\n              <th class=\"info\">Height</th>\r\n              <td>{{selectedLayout.height}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"info\">Radius (Phyllotaxis)</th>\r\n              <td>{{selectedLayout.phylloRadius}}</td>\r\n              <th class=\"info\">Radius (Point)</th>\r\n              <td>{{selectedLayout.pointRadius}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-lg-7 col-md-7 col-sm-12\">\r\n      <div class=\"visualization\">\r\n        <app-drag-zoom-2 [width]=\"selectedLayout.width\" [height]=\"selectedLayout.height\" [phylloRadius]=\"selectedLayout.phylloRadius\"\r\n          [pointRadius]=\"selectedLayout.pointRadius\"></app-drag-zoom-2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-12\">\r\n      <h3 class=\"text-primary\">Voronoi Spirals III</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12\">\r\n      <p class=\"text-info\">\r\n        Demonstrate how to:\r\n      </p>\r\n      <ul class=\"text-info\">\r\n        <li>\r\n          build an Angular component which uses a D3 service to render to <code>&lt;canvas&gt;</code>,\r\n        </li>\r\n        <li>\r\n          use D3 version 4 in TypeScript for Voronoi polygons.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-6 col-md-6 col-sm-12\">\r\n      <h4 class=\"text-primary\">Reference</h4>\r\n      <p class=\"text-justify\">\r\n        This example is based on <b>Mike Bostock's Voronoi Spirals III Block</b>. The original source with its supporting\r\n        explanation can be found by following the link below.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        <em>Source:</em> <a href=\"https://bl.ocks.org/mbostock/c677b9bb3c926ba13f3a902acb006b0c\">Voronoi Spirals III Block</a>.\r\n      </p>\r\n    </div>\r\n    <div class=\"col col-lg-6 col-md-6 col-sm-12\">\r\n      <h4 class=\"text-primary\">D3 Angular Implementation</h4>\r\n      <p class=\"text-justify\">\r\n        The implementation is a straightforward Angular component without any inputs. Its template is a <code>&lt;canvas&gt;</code>        element with fixed dimensions. The component renders the visualization using the <code>d3</code> instance provided\r\n        by the injected <code>D3Service</code>.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The D3 component can be embedded into a parent component using the following tag:\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        <code>&lt;app-voronoi-spirals-3&gt;&lt;/app-voronoi-spirals-3&gt;</code>.\r\n      </p>\r\n      <p class=\"text-justify\">\r\n        The source code for the D3 component can be found at:\r\n      </p>\r\n      <p>\r\n        <a href=\"https://github.com/tomwanzek/d3-ng2-demo/tree/master/src/app/d3-demos/voronoi-spirals-3\">Voronoi Spirals III D3 Component</a>.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-lg-12\">\r\n      <div class=\"visualization\">\r\n        <app-voronoi-spirals-3></app-voronoi-spirals-3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ })

},[613]);
//# sourceMappingURL=main.bundle.js.map