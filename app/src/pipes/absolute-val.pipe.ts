import  { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'absoluteVal'})
export class AbsoluteValPipe implements PipeTransform {

    transform(value:number) {
        if (value) {
					value = Math.abs(value);
        }
        return value;
    }
}