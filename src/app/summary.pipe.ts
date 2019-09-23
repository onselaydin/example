import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: string) {
        if(!value) return null;
        return value.substr(0,20) + '...'
    }
    
}