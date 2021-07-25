import { fromEvent } from 'rxjs'
import { sampleTime } from 'rxjs/operators'

export function sampleTimeRx() {
  const click$ = fromEvent(document, 'click')

  click$.pipe(
    sampleTime(1500)
  ).subscribe(console.log)
}
