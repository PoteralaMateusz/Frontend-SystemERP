import { Injectable } from '@angular/core';
import {filter, map, Subject, Subscription} from "rxjs";
import {EventData} from "./EventData";


@Injectable({
  providedIn: 'root'
})
export class EvenBusService {
  private subject$ = new Subject<EventData>();

  emit(event: EventData) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EventData) => e.name === eventName),
      map((e: EventData) => e["value"])).subscribe(action);
  }
}
