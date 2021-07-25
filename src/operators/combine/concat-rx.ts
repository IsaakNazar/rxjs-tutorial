import { concat, empty, EMPTY, interval } from 'rxjs'
import { delay, startWith, take } from 'rxjs/operators'

/* Order matters - first in first out
* let join multiple observables, subscribing order as previous subscriber completes
* ex: network request, ordered messages etc
* */
export function concatRx() {
  const interval$ = interval(1000)
  const delayed$ = EMPTY.pipe(delay(2000))

  concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2))
  ).subscribe(console.log)


  concat(
    delayed$.pipe(startWith('...3')),
    delayed$.pipe(startWith('...2')),
    delayed$.pipe(startWith('...1')),
  ).subscribe(console.log)
}
