import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarYearViewComponent } from './calendar-year-view.component';
import { CalendarYearViewHeaderComponent } from './calendar-year-view/calendar-year-view-header/calendar-year-view-header.component';
import { CalendarYearViewEventComponent } from './calendar-year-view/calendar-year-view-event/calendar-year-view-event.component';
import { CalendarYearViewHourSegmentComponent } from './calendar-year-view/calendar-year-view-hour-segment/calendar-year-view-hour-segment.component';
import { CalendarYearViewDaySegmentComponent } from './calendar-year-view/calendar-year-view-day-segment/calendar-year-view-day-segment.component';
import { CalendarYearViewCurrentTimeMarkerComponent } from './calendar-year-view/calendar-year-view-current-time-marker/calendar-year-view-current-time-marker.component';

export {
  CalendarYearViewComponent,
  CalendarYearViewBeforeRenderEvent,
} from './calendar-year-view.component';
export {
  WeekViewAllDayEvent as CalendarWeekViewAllDayEvent,
  WeekViewAllDayEventRow as CalendarWeekViewAllDayEventRow,
  GetWeekViewArgs as CalendarGetWeekViewArgs,
} from 'calendar-utils';
export { getWeekViewPeriod } from '../common/util';

// needed for ivy, not part of the public api
export { CalendarYearViewHeaderComponent as ɵCalendarYearViewHeaderComponent } from './calendar-year-view/calendar-year-view-header/calendar-year-view-header.component';
export { CalendarYearViewEventComponent as ɵCalendarYearViewEventComponent } from './calendar-year-view/calendar-year-view-event/calendar-year-view-event.component';
export { CalendarYearViewHourSegmentComponent as ɵCalendarYearViewHourSegmentComponent } from './calendar-year-view/calendar-year-view-hour-segment/calendar-year-view-hour-segment.component';
export { CalendarYearViewCurrentTimeMarkerComponent as ɵCalendarYearViewCurrentTimeMarkerComponent } from './calendar-year-view/calendar-year-view-current-time-marker/calendar-year-view-current-time-marker.component';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule,
  ],
  declarations: [
    CalendarYearViewComponent,
    CalendarYearViewHeaderComponent,
    CalendarYearViewEventComponent,
    CalendarYearViewHourSegmentComponent,
    CalendarYearViewDaySegmentComponent,
    CalendarYearViewCurrentTimeMarkerComponent,
  ],
  exports: [
    ResizableModule,
    DragAndDropModule,
    CalendarYearViewComponent,
    CalendarYearViewHeaderComponent,
    CalendarYearViewEventComponent,
    CalendarYearViewHourSegmentComponent,
    CalendarYearViewCurrentTimeMarkerComponent,
  ],
})
export class CalendarYearModule {}
