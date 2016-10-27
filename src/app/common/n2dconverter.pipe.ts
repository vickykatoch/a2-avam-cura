import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name : 'n2dFilter'
})
export class NumberToDateConvertPipe implements PipeTransform{
    transform(value : number) : string{
        return value ? this.convert(value) : "";
    }
    private convert(value: number): string {
        let dt = new Date(value);        
        return dt.toLocaleDateString() + " " + dt.toLocaleTimeString().toLocaleLowerCase();
    }
}