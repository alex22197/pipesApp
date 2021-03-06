import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {

    transform(vuela: boolean = true): string {

        return ( vuela ) 
            ? 'vuela' 
            : 'no vuela';
    }
}