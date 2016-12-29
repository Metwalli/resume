import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../../../../shared/models/language';

@Component({
  selector: 'language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent implements OnInit {
  @Input() item: Language = new Language();
  constructor() { }

  ngOnInit() {
  }

}
