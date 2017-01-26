import {Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {PersonalInfo} from '../../shared/models/personal-info';
import { Account } from '../../shared/models/account';

//import { TranslateComponent, TranslatePipe } from './'

@Component ({    
    selector: 'personal-info',    
    templateUrl: 'personal-info.component.html',
    styleUrls: ['personal-info.component.scss']
})

export /**
 * PersonalInfoComponent
 */
class PersonalInfoComponent implements OnInit, AfterViewChecked {     
    form: NgForm;
    submitAttempt: boolean = false;
    genderList = [
      {value: 'm', viewValue: 'Male'},
      {value: 'f', viewValue: 'Female'}
    ];
    @Input()personalInfo: PersonalInfo = new PersonalInfo();    
    @ViewChild('form') currentForm: NgForm;
    //@Output() checkFormValidation = new EventEmitter<boolean>();
    constructor(){ }    
    ngOnInit(){
        if (!this.personalInfo.accountList){
            this.personalInfo.accountList = [];
        }  
        //this.buildForm();  
        //this.isLoad = false;
    }  
    
    ngAfterViewChecked() {
      this.formChanged();
      //this.checkFormValidation.emit(this.form.valid);
    } 
    
    onChangeName(){      
      this.personalInfo.fullName = (this.personalInfo.firstName? this.personalInfo.firstName: "") + " " ;
      this.personalInfo.fullName += this.personalInfo.lastName? this.personalInfo.lastName: ""; 
    } 
    checkValidation(): boolean{        
        return this.form.valid;        
    }
    onChangeIcon(icn: string){
        this.personalInfo.icon = icn;
    }

    addAccount(){
        this.personalInfo.accountList.push(new Account());    
    }
    
    removeAccount(index: number){
        this.personalInfo.accountList.splice(index,1);        
    } 

    onSubmit(){      
      this.submitAttempt = true;
      this.onValueChanged();
    }
//--------------------
  formChanged() {
    if (this.currentForm === this.form) { return; }
    this.form = this.currentForm;
    if (this.form) {
      this.form.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }
  onValueChanged(data?: any) {
    if (!this.form) { return; }
    const form = this.form.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if ((control && control.dirty && !control.valid)  || (control && this.submitAttempt)) {
        const messages = this.validationMessages[field];        
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
// buildForm(): void {
//     this.form = this.fb.group({
//       'firstName': [this.personalInfo.firstName, Validators.required],
//       'lastName': [this.personalInfo.lastName, Validators.required],
//       'fullName':    [this.personalInfo.fullName],
//       'gender': [this.personalInfo.gender, Validators.required],
//       'maritalStatus': [this.personalInfo.maritalStatus],
//       'dob': [this.personalInfo.dob],
//       'mobile': [this.personalInfo.mobile],
//       'email': [this.personalInfo.email, Validators.required],
//       'nationality': [this.personalInfo.nationality],
//       'address': [this.personalInfo.address],
//       'city': [this.personalInfo.city],
//       'country': [this.personalInfo.country],
//       'profile': [this.personalInfo.profile],
//       'image': [this.personalInfo.image]     
//     });
//     this.form.valueChanges
//       .subscribe(data => this.onValueChanged(data));
//     this.onValueChanged(); // (re)set validation messages now
//   }
  // onValueChanged(data?: any) {
  //   if (!this.form) { return; }
  //   const form = this.form;
  //   for (const field in this.formErrors) {
  //     // clear previous error message (if any)
  //     this.formErrors[field] = '';
  //     const control = form.get(field);
  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.validationMessages[field];
  //       for (const key in control.errors) {
  //         this.formErrors[field] += messages[key] + ' ';
  //       }
  //     }
  //   }    
  // }
  formErrors = {
    'firstName': '',
    'lastName': '',
    'gender': '',
    'email': ''
  };
  validationMessages = {
    'firstName': {'required': 'First Name is required.'},
    'lastName': {'required': 'Last Name is required.'},
    'gender': {'required': 'Gender is required.'},
    'email': {'required': 'Email is required.'}
  };
}