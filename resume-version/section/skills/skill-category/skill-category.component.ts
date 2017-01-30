import { Component, OnInit, Input } from '@angular/core';
import { Skill, SkillCategory } from '../../../../shared/models/skill';
import { SkillItemComponent } from '../skill-item/skill-item.component';
import { SectionComponent } from '../../section.component';

@Component({
  selector: 'skill-category',
  templateUrl: './skill-category.component.html',
  styleUrls: ['./skill-category.component.css']
})
export class SkillCategoryComponent extends SectionComponent{  
  @Input() section: any;        
  constructor(){ super(); }  
  ngOnInit(){    
    if(this.section.itemList.length == 0){
      this.section.type = 'skill-category';
      this.addItem();       
    }
  }
}
