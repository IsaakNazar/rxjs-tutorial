import { fromEvent } from 'rxjs'
import { auditTime, sampleTime } from 'rxjs/operators'

export function auditTimeRx() {
  const click$ = fromEvent(document, 'click')

  click$.pipe(
    auditTime(1500)
  ).subscribe(console.log)
}
