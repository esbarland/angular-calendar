import { Component, Input, TemplateRef } from '@angular/core';
import { WeekViewHourSegment } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-year-view-day-segment',
  templateUrl: 'calendar-year-view-day-segment.component.html',
})
export class CalendarYearViewDaySegmentComponent {
  @Input() segment: WeekViewHourSegment;

  @Input() segmentHeight: number;

  @Input() locale: string;

  @Input() isTimeLabel: boolean;

  @Input() daysInWeek: number;

  @Input() customTemplate: TemplateRef<any>;
}
