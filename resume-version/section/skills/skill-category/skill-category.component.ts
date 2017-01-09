import { Component, OnInit, Input } from '@angular/core';
import { Skill, SkillCategory } from '../../../../shared/models/skill';
import { SkillItemComponent } from '../skill-item/skill-item.component';
@Component({
  selector: 'skill-category',
  templateUrl: './skill-category.component.html',
  styleUrls: ['./skill-category.component.css']
})
export class SkillCategoryComponent implements OnInit {
  @Input() category: SkillCategory = new SkillCategory();
  constructor() { }

  ngOnInit() {
    if (!this.category.itemList){
      this.category.itemList = [];
      this.addNewItem();
    }else if (this.category.itemList.length == 0){
      this.addNewItem();
    }
  }
  addNewItem(){
    this.category.itemList.push(new Skill());
  }
  
  removeItem(index: number){
    this.category.itemList.splice(index,1);
  }
}
