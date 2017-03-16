import { Component, OnInit, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { D3Service, D3, Selection, HierarchyNode } from 'd3-ng2-service';

@Component({
  selector: 'app-collapsible-tree',
  template: `<svg:svg width="960" height="500"></svg:svg>`,
  styleUrls: ['./collapsible-tree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CollapsibleTreeComponent implements OnInit {
  @Input() public data: any;
  private d3: D3;
  private parentNativeElement: any;
  private tree: any;
  private g: Selection<SVGGElement, any, any, any>;
  private root: HierarchyNode<any>;
  private i: number = 0;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    if (this.parentNativeElement !== null && this.data) {
      let margin = { top: 20, right: 90, bottom: 30, left: 90 };
      let width = 960 - margin.left - margin.right;
      let height = 500 - margin.top - margin.bottom;
      d3ParentElement = d3.select(this.parentNativeElement);
      let svg = d3ParentElement.select<SVGSVGElement>('svg');
      this.g = svg.append<SVGGElement>('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      this.tree = d3.tree().size([height, width]);
      this.root = d3.hierarchy(this.data, d => { return d.children; });
      (this.root as any).x0 = height / 2;
      (this.root as any).y0 = 0;
      this.root.children.forEach(this.collapse.bind(this));
      this.update(this.root);
    }
  }
  update(source) {
    const duration: number = 750;
    const treeData = this.tree(this.root);
    let nodes = this.root.descendants();
    let links = this.root.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(d => { (d as any).y = d.depth * 180 });

    // ****************** Nodes section ***************************
    let node = this.g.selectAll<SVGGElement, any>('g.node')
      .data(nodes, d => { return d.id || (d.id = ++this.i); });
    let nodeEnter = node.enter().append<SVGGElement>('g')
      .attr('class', 'node')
      .attr('transform', d => {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', this.click.bind(this));
    nodeEnter.append<SVGCircleElement>('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', d => {
        return (d as any)._children ? 'lightsteelblue' : '#fff';
      });

    nodeEnter.append<SVGTextElement>('text')
      .attr('dy', '.35em')
      .attr('x', d => {
        return d.children || (d as any)._children ? -13 : 13;
      })
      .attr('text-anchor', d => {
        return d.children || (d as any)._children ? 'end' : 'start';
      })
      .text(d => { return d.data.name; });

    // UPDATE
    let nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(duration)
      .attr('transform', d => {
        return 'translate(' + (d as any).y + ',' + (d as any).x + ')';
      });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style('fill', d => {
        return (d as any)._children ? 'lightsteelblue' : '#fff';
      })
      .attr('cursor', 'pointer');

    // Remove any exiting nodes
    let nodeExit = node.exit().transition()
      .duration(duration)
      .attr('transform', d => {
        return 'translate(' + source.y + ',' + source.x + ')';
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // ****************** links section ***************************
    // Update the links...
    let link = this.g.selectAll('path.link')
      .data(links, d => { return (d as any).id; });

    // Enter any new links at the parent's previous position.
    let linkEnter = link.enter().insert('path', 'g')
      .attr('class', 'link')
      .attr('d', d => {
        let o = { x: source.x0, y: source.y0 };
        return this.diagonal(o, o);
      });

    // UPDATE
    let linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
      .duration(duration)
      .attr('d', d => { return this.diagonal(d, d.parent); });

    // Remove any exiting links
    let linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', d => {
        let o = { x: source.x, y: source.y };
        return this.diagonal(o, o);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(d => {
      (d as any).x0 = (d as any).x;
      (d as any).y0 = (d as any).y;
    });
  }

  diagonal(s, d) {
    // Creates a curved diagonal path from parent to the child nodes
    return `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
  }

  click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d);
  }

  collapse(d) {
    if (d.children) {
      (d as any)._children = d.children;
      (d as any)._children.forEach(this.collapse.bind(this));
      d.children = null;
    }
  }
}
