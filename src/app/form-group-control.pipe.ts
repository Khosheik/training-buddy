import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formGroupControl',
  standalone: true
})
export class FormGroupControlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
