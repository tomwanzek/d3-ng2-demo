import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-collapsible-tree',
  templateUrl: './wrapper-collapsible-tree.component.html',
  styleUrls: ['./wrapper-collapsible-tree.component.css']
})
export class WrapperCollapsibleTreeComponent implements OnInit {

  private treeData: any = {
    'name': 'Top Level',
    'children': [
      {
        'name': 'Level 2: A',
        'children': [
          { 'name': 'Son of A' },
          { 'name': 'Daughter of A' }
        ]
      },
      { 'name': 'Level 2: B' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
