import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent implements OnInit {

  selection = new Set<string>();

  selectionArray() {
    return [...this.selection];
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
