import {Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Section} from '../../shared/models/section';
import {LanguageComponent} from './language/language.component';
import {LanguageItemComponent} from './language/language-item/language-item.component';
import {EducationComponent} from './education/education.component';
import {EducationItemComponent} from './education/education-item/education-item.component';
import {ExperienceComponent} from './experience/experience.component';
import {ExperienceItemComponent} from './experience/experience-item/experience-item.component';
import {AwardComponent} from './award/award.component';
import {AwardItemComponent} from './award/award-item/award-item.component';
import {CertificateComponent} from './certificate/certificate.component';
import {CertificateItemComponent} from './certificate/certificate-item/certificate-item.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {HobbyItemComponent} from './hobbies/hobby-item/hobby-item.component';
import {OtherTextComponent} from './other-text/other-text.component';
import {PublicationComponent} from './publication/publication.component';
import {PublicationItemComponent} from './publication/publication-item/publication-item.component';
import {ReferenceComponent} from './reference/reference.component';
import {ReferenceItemComponent} from './reference/reference-item/reference-item.component';
import {VolunteeringComponent} from './volunteering/volunteering.component';
import {VolunteeringItemComponent} from './volunteering/volunteering-item/volunteering-item.component';


@Component({
  
  selector: 'section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css']
})
export /**
 * SectionComponent
 */
class SectionComponent implements OnInit {
  constructor(){ }
  @Input() section: Section;
  @Input() required: boolean = false;
  @Output() removeSectionClick = new EventEmitter<number>();
  
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
}
