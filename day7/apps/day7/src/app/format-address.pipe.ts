import { Pipe, PipeTransform } from '@angular/core';
interface addressType {
  address1: string;
  adddress2: string;
  city: string;
  state: number;
  zip: number;
  country: string;
}
@Pipe({
  name: 'formatAddressNow',
})
export class FormatAddressPipe implements PipeTransform {
  transform(addr: addressType) {
    return (
      addr?.address1 +
      ',' +
      addr?.adddress2 +
      ',' +
      addr?.city +
      ',' +
      addr?.state +
      ',' +
      addr?.zip +
      ',' +
      addr?.country
    );
  }
}
