import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../entities/user';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterFor implements PipeTransform {
    transform(items: any[], filter: IUser): any {
        
        if (!items || !filter) {
            return items;
        }

        return items.filter(item => item.name.toLocaleLowerCase().indexOf(filter.name.toLocaleLowerCase()) !== -1);
    }
}