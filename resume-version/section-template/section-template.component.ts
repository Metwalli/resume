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
      {"$key": "",  "title": "Language", "icon": "ion-earth", "type": "language", "itemList":[]},
      {"$key": "",  "title": "Education", "icon": "ion-university", "type": "education", "itemList":[]},
      {"$key": "",  "title": "Experience", "icon": "ion-briefcase", "type": "experience", "itemList": []},
      {"$key": "",  "title": "Skills", "icon": "ion-android-star-half", "type": "skills", "itemList":[]},
      {"$key": "",  "title": "Certificates", "icon": "ion-ribbon-b", "type": "certificate", "itemList":[]},
      {"$key": "",  "title": "Publications", "icon": "ion-ios-book", "type": "publication", "itemList":[]},
      {"$key": "",  "title": "Reference", "icon": "ion-android-person", "type": "reference", "itemList":[]},
      {"$key": "",  "title": "Awards", "icon": "ion-trophy", "type": "award", "itemList":[]},
      {"$key": "",  "title": "Volunteerings", "icon": "ion-android-share-alt", "type": "volunteering", "itemList":[]},
      {"$key": "",  "title": "Hobbies", "icon": "ion-android-bicycle", "type": "hobbies", "itemList":[]},
      {"$key": "",  "title": "Others", "icon": "ion-social-buffer", "type": "other-text", "itemList":[]}
  ];
}
