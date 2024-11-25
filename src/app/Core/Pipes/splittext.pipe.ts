import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splittext',
  standalone: true
})
export class SplittextPipe implements PipeTransform {

  transform(data: string , arg?:number): string {
    return data.split(" " , arg).join(" ");
  }

}
