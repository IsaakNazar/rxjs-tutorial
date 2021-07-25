import { fromEvent, interval } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

export function takeUntilRx() {
  const counter$ = interval(1000)
  const click$ = fromEvent(document, 'click')

  counter$.pipe(
    takeUntil(click$)
  ).subscribe({
    next: console.log,
    complete: () => console.log('Completed')
  })
}
