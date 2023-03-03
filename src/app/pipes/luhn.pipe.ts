import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'luhn'
})
export class LuhnPipe implements PipeTransform {

  transform(value: any): boolean {
    if(!value) return false;
    if(value.length < 16) return false;
    var nCheck = 0, nDigit = 0, bEven = false;
    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
          nDigit = parseInt(cDigit, 10);

      if (bEven) {
          if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
  }

    return (nCheck % 10) == 0;
  }

}
