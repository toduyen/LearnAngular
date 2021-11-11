import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'uongruou'
})
export class UongRuouPipe implements PipeTransform {
  transform(items: any[]):any
  {
    return items.filter(item => item.age >= 18);
  }
}
