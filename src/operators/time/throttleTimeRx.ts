import { asyncScheduler, fromEvent } from 'rxjs'
import { debounceTime, throttleTime } from 'rxjs/operators'

export function throttleTimeRx() {
  const click$ = fromEvent(document, 'click')

  click$.pipe(
    // throttleTime(1000, asyncScheduler, {leading: false, trailing: true})  // same as auditTime(1000)
    throttleTime(1000)
  ).subscribe(console.log)
}
