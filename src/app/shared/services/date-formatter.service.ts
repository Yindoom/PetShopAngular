import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  constructor() { }

  format(toFormat: Date): string {
  const dp = new DatePipe(navigator.language);
  const df = 'yyyy-MM-dd';
  return dp.transform(toFormat, df);
}
}
