import { Component, Input, OnInit } from '@angular/core';


export interface DragZoom2Layout {
  name: string;
  label: string;
  width: number;
  height: number;
  phylloRadius: number;
  pointRadius: number;
}


@Component({
  selector: 'app-wrapper-drag-zoom-2',
  templateUrl: './wrapper-drag-zoom-2.component.html',
  styleUrls: ['./wrapper-drag-zoom-2.component.css']
})
export class WrapperDragZoom2Component implements OnInit {

  @Input() selectedLayout: DragZoom2Layout;

  public dragZoom2Layouts: DragZoom2Layout[] = [
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

  ngOnInit() {
    if (this.selectedLayout === undefined) {
      this.selectedLayout = this.dragZoom2Layouts[0];
    }
  }

  public onActiveButtonChange(layout: DragZoom2Layout): void {
    this.selectedLayout = layout;
  }


}
