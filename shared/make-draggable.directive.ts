import { Directive, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[makeDraggable]'
})
export class MakeDraggableDirective {

  @Input('makeDraggable') data: any;
  @Output() dropped: EventEmitter<any> = new EventEmitter();
  constructor(private _elementRef: ElementRef) {}
  
  ngOnInit() {
    // Get the current element
    let el = this._elementRef.nativeElement.querySelector('div');
    
    // Set the draggable attribute to the element
    el.draggable = 'true';
    
    // Set up the dragstart event and add the drag-src CSS class 
    // to change the visual appearance. Set the current todo as the data
    // payload by stringifying the object first
    el.addEventListener('dragstart', (e) => {     
      el.classList.add('drag-src')
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', JSON.stringify(this.data));
    });
    
    // Remove the drag-src class
    el.addEventListener('dragend', (e) => {
      e.preventDefault();
      el.classList.remove('drag-src');
    });

    //------
    el.addEventListener('dragenter', (e) => {
      el.classList.add('over');
    });

    // Remove the style
    el.addEventListener('dragleave', (e) => {
      el.classList.remove('over');
    });

    el.addEventListener('dragover', (e) => {
      if (e.preventDefault) {
        e.preventDefault();
      }

      e.dataTransfer.dropEffect = 'move';
      return false;
    });

    // On drop, get the data and convert it back to a JSON object
    // and fire off an event passing the data
    el.addEventListener('drop', (e) => {
      if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
      }
      
      el.classList.remove('over');
      let data = JSON.parse(e.dataTransfer.getData('text'));
      this.dropped.emit(data);
      return false;
    });
  }

}
