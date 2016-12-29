import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Icon} from './icon';

@Component({
    selector: 'icon-list',
    templateUrl: 'icon-list.component.html',
    styleUrls: ['icon-list.component.css']
})

export /**
 * IconListComponent
 */
class IconListComponent {
    constructor() {
        
    }
    @Input() icon: string;
    @Input() category: string = '';
    @Output() onChangeIcon = new EventEmitter<string>(); 
    selectedIcon(i: Icon){
        this.onChangeIcon.emit(i.name);
        this.icon = i.name;   
    }
    iconList: Icon[] =[
        {"category": "1", "name":'ion-android-desktop'},
        {"category": "1", "name":'ion-android-contacts'},
        {"category": "1", "name":'ion-android-contact'},
        {"category": "1", "name":'ion-android-color-palette'},
        {"category": "1", "name":'ion-android-cloud-outline'},
        {"category": "1", "name":'ion-android-cloud-done'},
        {"category": "1", "name":'ion-android-cloud-circle'},
        {"category": "1", "name":'ion-android-clipboard'},
        {"category": "1", "name":'ion-android-chat'},
        {"category": "1", "name": 'ion-android-car'},
        {"category": "1", "name": 'ion-android-camera'},
        {"category": "1", "name": 'ion-android-call'},
        {"category": "1", "name": 'ion-android-calendar'},
        {"category": "1", "name": 'ion-android-bulb'},
        {"category": "1", "name": 'ion-android-bicycle'},
        {"category": "1", "name": 'ion-android-attach'},
        {"category": "1", "name": 'ion-android-apps'},
        {"category": "1", "name": 'ion-android-add-circle'},
        {"category": "1", "name": 'ion-android-create'},
        {"category": "1", "name": 'ion-android-drafts'},
        {"category": "1", "name": 'ion-android-favorite'},
        {"category": "1", "name": 'ion-android-film'},
        {"category": "1", "name": 'ion-android-folder-open'},
        {"category": "1", "name": 'ion-android-globe'},
        {"category": "1", "name": 'ion-android-hangout'},
        {"category": "1", "name": 'ion-android-home'},
        {"category": "1", "name": 'ion-android-laptop'},
        {"category": "1", "name": 'ion-android-locate'},
        {"category": "1", "name": 'ion-android-microphone'},
        {"category": "1", "name": 'ion-android-navigate'},
        {"category": "1", "name": 'ion-android-person-add'},
        {"category": "1", "name": 'ion-android-phone-portrait'},
        {"category": "1", "name": 'ion-android-pin'},
        {"category": "1", "name": 'ion-android-plane'},
        {"category": "1", "name": 'ion-android-playstore'},
        {"category": "1", "name": 'ion-android-print'},
        {"category": "1", "name": 'ion-android-radio-button-on'},
        {"category": "1", "name": 'ion-android-restaurant'},
        {"category": "1", "name": 'ion-android-settings'},
        {"category": "1", "name": 'ion-android-share-alt'},
        {"category": "1", "name": 'ion-android-star'},
        {"category": "1", "name": 'ion-android-star-half'},
        {"category": "1", "name": 'ion-android-sunny'},
        {"category": "1", "name": 'ion-android-textsms'},
        {"category": "1", "name": 'ion-android-walk'},
        {"category": "1", "name": 'ion-android-wifi'},
        {"category": "1", "name": 'ion-aperture'},
        {"category": "1", "name": 'ion-archive'},
        {"category": "1", "name": 'ion-arrow-down-a'},
        {"category": "1", "name": 'ion-arrow-graph-up-right'},
        {"category": "1", "name": 'ion-at'},
        {"category": "1", "name": 'ion-briefcase'},
        {"category": "1", "name": 'ion-chatboxes'},
        {"category": "1", "name": 'ion-chatbubbles'},
        {"category": "1", "name": 'ion-clipboard'},
        {"category": "1", "name": 'ion-close-circled'},
        {"category": "1", "name": 'ion-earth'},
        {"category": "1", "name": 'ion-university'},
        {"category": "1", "name": 'ion-trophy'},
        {"category": "1", "name": 'ion-android-share-alt'},
        {"category": "1", "name": 'ion-ios-world'},
        {"category": "1", "name": 'ion-ribbon-b'},
        {"category": "1", "name": 'ion-ios-pie'},
        {"category": "1", "name": 'ion-wand'},
        {"category": "1", "name": 'ion-volume-high'},
        {"category": "1", "name": 'ion-videocamera'},
        {"category": "1", "name": 'ion-usb'},
        {"category": "1", "name": 'ion-trash-a'},
        {"category": "1", "name": 'ion-stats-bars'},
        {"category": "1", "name": 'ion-speedometer'},
        {"category": "social", "name": 'ion-social-wordpress'},
        {"category": "social", "name": 'ion-social-youtube'},
        {"category": "social", "name": 'ion-social-windows'},
        {"category": "social", "name": 'ion-social-whatsapp'},
        {"category": "social", "name": 'ion-social-facebook'},
        {"category": "social", "name": 'ion-social-googleplus'},
        {"category": "social", "name": 'ion-social-instagram'},
        {"category": "social", "name": 'ion-social-linkedin'},
        {"category": "social", "name": 'ion-social-github'},
        {"category": "social", "name": 'ion-social-pinterest'},
        {"category": "social", "name": 'ion-social-twitter'},
        {"category": "social", "name": 'ion-social-tux'},
        {"category": "social", "name": 'ion-social-skype'},
        {"category": "social", "name": 'ion-social-octocat'},
        {"category": "social", "name": 'ion-social-linkedin'},
        {"category": "social", "name": 'ion-social-dropbox'},
        {"category": "social", "name": 'ion-social-chrome'},
        {"category": "social", "name": 'ion-social-apple'},
        {"category": "social", "name": 'ion-social-angular'},
        {"category": "social", "name": 'ion-social-android'},
        {"category": "1", "name": 'ion-settings'},
        {"category": "1", "name": 'ion-thumbsup'},
        {"category": "1", "name": 'ion-ribbon-a'},
        {"category": "1", "name": 'ion-radio-waves'},
        {"category": "1", "name": 'ion-pound'},
        {"category": "1", "name": 'ion-planet'},
        {"category": "1", "name": 'ion-playstation'},
        {"category": "1", "name": 'ion-plane'},
        {"category": "1", "name": 'ion-paper-airplane'},
        {"category": "1", "name": 'ion-nuclear'},
        {"category": "1", "name": 'ion-network'},
        {"category": "1", "name": 'ion-music-note'},
        {"category": "1", "name": 'ion-mouse'},
        {"category": "1", "name": 'ion-model-s'},
        {"category": "1", "name": 'ion-mic-a'},
        {"category": "1", "name": 'ion-medkit'},
        {"category": "1", "name": 'ion-levels'},
        {"category": "1", "name": 'ion-leaf'},
        {"category": "1", "name": 'ion-ios-search-strong'},
        {"category": "1", "name": 'ion-monitor'},

    ];

    ngOnInit(){
            return;
    }
}
