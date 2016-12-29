import {Component, Input} from '@angular/core';

@Component({
  
  selector: 'other-text',
  template: `   
  <md-card-content>
    <div layout="row" layout-align="space-between center">		
			<md-textarea flex="100" rows="7" placeholder="{{ 'Other' | translate }}" [(ngModel)]="other" name="other"></md-textarea>
		</div>
  </md-card-content>
  `,
  
})

export class OtherTextComponent{  
  @Input() other: string;
  constructor(){}
}
