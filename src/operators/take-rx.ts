import { fromEvent, of } from 'rxjs'
import { first, map, take, takeWhile } from 'rxjs/operators'

export function takeRx() {

  const nums$ = of(1, 2, 3, 4, 5)
  const click$ = fromEvent(document, 'click')
  click$.pipe(
    map((evt: any) => ({
      x: evt.clientX,
      y: evt.clientY
    })),
    // take(3)      // take first 3 items
    // first(({y}) => y > 250)      // filter & take(1)
    takeWhile(({y}) => y > 250, true)
  ).subscribe({
    next: console.log,
    complete: () => console.log('Completed')
  })
}
