import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dir'
})
export class DirPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
