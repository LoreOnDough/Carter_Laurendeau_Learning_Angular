import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeColour'
})
export class ChangeColourPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value?.startsWith('B')){
      return "red";
    } else {
      return "blue";
    }
  }

}
