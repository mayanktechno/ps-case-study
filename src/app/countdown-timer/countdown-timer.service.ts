import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {

  displayTimer = new BehaviorSubject<any>(0);
  displayLogs = new Subject();
  displayStartCount = new BehaviorSubject<any>(0);
  displayPauseCount = new BehaviorSubject<any>(0);

  constructor() { }
}
