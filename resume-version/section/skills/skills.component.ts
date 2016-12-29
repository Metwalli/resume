import { Component, OnInit, Input } from '@angular/core';
import { Skill, SkillCategory } from '../../../shared/models/skill';
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() categoryList: SkillCategory[] = [];
  constructor(){}
  ngOnInit(){
    if(this.categoryList.length == 0){
      this.addNewCategory();
    }
  }

  addNewCategory(){
    this.categoryList.push(new SkillCategory());    
  }
  
  removeCategory(index: number){
    this.categoryList.splice(index,1);
  }
}
