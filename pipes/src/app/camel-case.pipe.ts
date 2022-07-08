import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ')
    let result = ''

    for(let v of values) {
      result += this.capitalize(v) + ' '
    }

    return result
  }

  capitalize(values: string) {
    return values.substring(0, 1). toUpperCase() +
    values.substring(1).toLowerCase();


  }
}
