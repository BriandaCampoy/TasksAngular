import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormater',
})
export class DateFormaterPipe implements PipeTransform {
  transform(value: string): string {
    const datePipe: DatePipe = new DatePipe('en-US');
    // Convert the date string to a Date object.
    const dateObj = new Date(value);

    // Check if the date is valid before formatting.
    if (isNaN(dateObj.getTime())) {
      // If the date is not valid, return 'N/A' as the formatted value.
      return 'N/A';
    }
    // Format the date using the specified format.
    const formatted = datePipe.transform(dateObj, 'dd MMMM yyyy');
    // Return the formatted date string.
    return formatted != null ? formatted : 'sf';
  }
}
