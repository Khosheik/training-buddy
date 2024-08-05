import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'formGroup',
  standalone: true
})
export class FormGroupPipe implements PipeTransform {

  transform(question: any): any {
    let controls = {}

    for(const option of question.options){
      controls = {
        ...controls, 
        [option.key]: new FormControl(null)
      }
    }

    const formGroup = new FormGroup({...controls})
    console.log(`question ${question.key}`, formGroup)
    return formGroup
  }

}
