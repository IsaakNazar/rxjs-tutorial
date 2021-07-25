import { fromEvent, interval } from 'rxjs'
import { switchMap } from 'rxjs/operators'

/*
switchMapTo is identical to switchMap except that it takes an observable
 instead of a callback function
*/

export function switchMapRx() {
  const click$ = fromEvent(document, 'click')
  const interval$ = interval(1000)

  click$.pipe(
    switchMap(() => interval$)
  ).subscribe(console.log)
}
