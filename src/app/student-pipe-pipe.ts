import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentPipe'
})
export class StudentPipe implements PipeTransform {

  transform(value:boolean | undefined): string {
    switch (value){
      case true:
        return "Student";
      default :
        return "Graduate";
    }


  }

}
