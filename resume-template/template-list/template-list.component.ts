import { Component, OnInit } from '@angular/core';
import { Template1Component } from '../template-1/template-1.component';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  templateList: Object[] = [{
      color: 'purple-700',
      thumpnail: 'library_books',
      route: 'template-1',
      title: 'Template-1',
    },{
      color: 'purple-700',
      thumpnail: 'library_books',
      route: 'template-2',
      title: 'Template-2',
    },{
      color: 'purple-700',
      thumpnail: 'library_books',
      route: 'template-3',
      title: 'Template-3',
    }
  ];


}
