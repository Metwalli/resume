import { Component, OnInit, Input } from '@angular/core';
import { Skill, SkillCategory } from '../../../shared/models/skill';
import { SectionComponent } from '../section.component';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends SectionComponent{  
  @Input() section: any;        
  constructor(){ super(); }  
  ngOnInit(){    
    if(this.section.itemList.length == 0){
      this.addItem();       
    }
  }
}
