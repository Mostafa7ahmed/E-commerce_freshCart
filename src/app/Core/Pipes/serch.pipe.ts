import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serch',
  standalone: true
})
export class SerchPipe implements PipeTransform {

  transform(ArryOfData:any[], text:string): any[] {
    return ArryOfData.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()));
  }

}
