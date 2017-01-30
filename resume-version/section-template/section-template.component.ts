import {Component, Output, EventEmitter} from '@angular/core';
import {Section} from '../../shared/models//section';

@Component({
  
  selector: 'section-template',
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.css']
})
export /**
 * SectionTemplateComponent
 */
class SectionTemplateComponent {
 
  constructor(){
  }
  //section: Section = new Section();
  @Output() sectionClick = new EventEmitter<Section>(); 
  selectedSection(sctn: Section){
      this.sectionClick.emit(sctn);  

  }
  sectionList: Section[]=[
      {"$key": "", "title": "Language", "icon": "ion-earth", "type": "language", "itemList":[]},
      {"$key": "", "order": 0, "title": "Education", "icon": "ion-university", "type": "education", "itemList":[]},
      {"$key": "", "order": 0, "title": "Experience", "icon": "ion-briefcase", "type": "experience", "itemList": []},
      {"$key": "", "order": 0, "title": "Skills", "icon": "ion-android-star-half", "type": "skills", "itemList":[]},
      {"$key": "", "order": 0, "title": "Certificates", "icon": "ion-ribbon-b", "type": "certificate", "itemList":[]},
      {"$key": "", "order": 0, "title": "Publications", "icon": "ion-ios-book", "type": "publication", "itemList":[]},
      {"$key": "", "order": 0, "title": "Reference", "icon": "ion-android-person", "type": "reference", "itemList":[]},
      {"$key": "", "order": 0, "title": "Awards", "icon": "ion-trophy", "type": "award", "itemList":[]},
      {"$key": "", "order": 0, "title": "Volunteerings", "icon": "ion-android-share-alt", "type": "volunteering", "itemList":[]},
      {"$key": "", "order": 0, "title": "Hobbies", "icon": "ion-android-bicycle", "type": "hobbies", "itemList":[]},
      {"$key": "", "order": 0, "title": "Others", "icon": "ion-social-buffer", "type": "other-text", "itemList":[]}
  ];
}
