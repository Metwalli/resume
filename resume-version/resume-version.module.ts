import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ResumeTemplateModule } from '../resume-template/resume-template.module';

//import { CoreModule } from '../core/core.module';

import { ResumeVersionRoutingModule } from './resume-version.routing.module';
import { IconListComponent } from './icon/icon-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ResumeVersionComponent } from './resume-version.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';
import { VersionListComponent } from './version-list/version-list.component';
import { SectionComponent } from './section/section.component';
import { LanguageComponent } from './section/language/language.component';
import { LanguageItemComponent } from './section/language/language-item/language-item.component';
import { EducationComponent } from './section/education/education.component';
import { EducationItemComponent } from './section/education/education-item/education-item.component';
import { ExperienceComponent } from './section/experience/experience.component';
import { ExperienceItemComponent } from './section/experience/experience-item/experience-item.component';
import { AwardComponent } from './section/award/award.component';
import { AwardItemComponent } from './section/award/award-item/award-item.component';
import { CertificateComponent } from './section/certificate/certificate.component';
import { CertificateItemComponent } from './section/certificate/certificate-item/certificate-item.component';
import { HobbiesComponent } from './section/hobbies/hobbies.component';
import { HobbyItemComponent } from './section/hobbies/hobby-item/hobby-item.component';
import { OtherTextComponent } from './section/other-text/other-text.component';
import { PublicationComponent } from './section/publication/publication.component';
import { PublicationItemComponent } from './section/publication/publication-item/publication-item.component';
import { ReferenceComponent } from './section/reference/reference.component';
import { ReferenceItemComponent } from './section/reference/reference-item/reference-item.component';
import { VolunteeringComponent } from './section/volunteering/volunteering.component';
import { VolunteeringItemComponent } from './section/volunteering/volunteering-item/volunteering-item.component';
import { SkillsComponent } from './section/skills/skills.component';
import { SkillCategoryComponent } from './section/skills/skill-category/skill-category.component';
import { SkillItemComponent } from './section/skills/skill-item/skill-item.component';
import { ContactAccountComponent } from './personal-info/contact-account/contact-account.component';
import { SectionTemplateComponent } from './section-template/section-template.component';
import { StandardVersionComponent } from './standard-version/standard-version.component';


@NgModule({
  imports: [    
    ResumeVersionRoutingModule,    
    SharedModule,
    ResumeTemplateModule       
  ],
  declarations: [
    IconListComponent, SectionTemplateComponent,ResumeVersionComponent,
    VersionDetailComponent, VersionListComponent, SectionComponent,
    PersonalInfoComponent, 
    AwardComponent, AwardItemComponent,
    CertificateComponent, CertificateItemComponent,
    EducationComponent, EducationItemComponent,
    ExperienceComponent,ExperienceItemComponent,
    HobbiesComponent,HobbyItemComponent,
    LanguageComponent, LanguageItemComponent,
    PublicationComponent, PublicationItemComponent,
    ReferenceComponent, ReferenceItemComponent,
    SkillCategoryComponent, SkillItemComponent,      
    VolunteeringComponent, VolunteeringItemComponent,
    OtherTextComponent,
    SkillsComponent,
    SkillCategoryComponent,
    SkillItemComponent,
    ContactAccountComponent,
    SectionTemplateComponent,
    StandardVersionComponent        
  ],
  providers: [ ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ResumeVersionModule { }
