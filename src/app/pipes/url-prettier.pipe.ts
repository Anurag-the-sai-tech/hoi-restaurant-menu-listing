import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'urlPrettier'
})
export class UrlPrettierPipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): string {
        return value.replaceAll(' ', '-');
    }
}
