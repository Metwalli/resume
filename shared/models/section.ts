export /**
 * Section
 */
class Section {
  constructor( title?: string, icon?: string, type?: string, items?: any[]){
    this.title = title;
    this.icon = icon;
    this.type = type;
    this.itemList = items;    
  }
  $key: string;
	title: string;
	icon: string;
	type: string;
	itemList: any;
}