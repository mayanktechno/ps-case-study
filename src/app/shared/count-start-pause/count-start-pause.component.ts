import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownTimerService } from 'src/app/countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-count-start-pause',
  templateUrl: './count-start-pause.component.html',
  styleUrls: ['./count-start-pause.component.scss']
})
export class CountStartPauseComponent implements OnInit {

  @Input() startCount:any;
  @Input() pauseCount:any;
  currentUrl:string = '';
  start:any;
  pause:any;
  constructor(private __countDownTimer : CountdownTimerService,private _router:Router) { }

  ngOnInit(): void {

    
    this.currentUrl = this._router.url
    if(this.currentUrl=='/timer-only'){
      this.__countDownTimer.displayStartCount.subscribe(res=>{
        this.start = res;
      })

      this.__countDownTimer.displayPauseCount.subscribe(res=>{
        this.pause = res;
      })
    }
  }

}
