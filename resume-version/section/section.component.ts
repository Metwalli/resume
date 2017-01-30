import {Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Section} from '../../shared/models/section';
import { Award } from '../../shared/models/award';
import { Certificate } from '../../shared/models/certificate';
import { Education } from '../../shared/models/education';
import { Experience } from '../../shared/models/experience';
import { Hobby } from '../../shared/models/hobby';
import { Language } from '../../shared/models/language';
import { Publication } from '../../shared/models/publication';
import { Reference } from '../../shared/models/reference';
import { Skill, SkillCategory } from '../../shared/models/skill';
import { Volunteering } from '../../shared/models/volunteering';


@Component({
  
  selector: 'section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css']
})
export /**
 * SectionComponent
 */
class SectionComponent implements OnInit {
  
  @Input() section: Section;
  @Input() required: boolean = false;
  @Output() removeSectionClick = new EventEmitter<number>();
  currentItemIndex: number;
  constructor(){ }
  ngOnInit(){
    if(!this.section.itemList){
      this.section.itemList = [];      
    }
  }
  removeSection(){
    if(confirm("Are You Sure to Remove this Section!")){
      this.removeSectionClick.emit(1);
    }
  }
  addItem(){
    switch(this.section.type){
      case 'award':{
        this.section.itemList.push(new Award());
        break;
      }
      case 'certificate':{
        this.section.itemList.push(new Certificate());
        break;
      }
      case 'education':{
        this.section.itemList.push(new Education());
        break;
      }
      case 'experience':{
        this.section.itemList.push(new Experience());
        break;
      }
      case 'hobbies':{
        this.section.itemList.push(new Hobby());
        break;
      }
      case 'language':{
        this.section.itemList.push(new Language());
        break;
      }
      case 'publication':{
        this.section.itemList.push(new Publication());
        break;
      }
      case 'reference':{
        this.section.itemList.push(new Reference());
        break;
      }
      case 'skills':{
        this.section.itemList.push(new SkillCategory());
        break;
      }
      case 'skill-category':{
        this.section.itemList.push(new Skill());
        break;
      }
      case 'volunteering':{
        this.section.itemList.push(new Volunteering());
        break;
      }
    }
    this.currentItemIndex = this.section.itemList.length - 1;
  }
  removeItem(index: number){
    this.section.itemList.splice(index,1);    
  }
  itemSelected(index: number){    
    this.currentItemIndex = index;
  }
}
