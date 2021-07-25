import { fromEvent, interval } from 'rxjs'
import { mapTo, scan, takeUntil, takeWhile, tap } from 'rxjs/operators'

export function countdown() {
  const countdown = document.getElementById('countdown')
  const message = document.getElementById('message')
  const stopBtn = document.getElementById('stop')
  const click$ = fromEvent(stopBtn, 'click')

  const counter$ = interval(1000).pipe(
    mapTo(1),
    scan((acc, cur) => {
      return acc - cur
    }, 10),
    tap(value => console.log('tap', value)),
    // filter(value => value >= 0)
    takeWhile(value => value >= 0),
    takeUntil(click$)
  )

  counter$.subscribe(value => {
    // @ts-ignore
    countdown.innerHTML = value
    if (!value) {
      message.innerHTML = 'Done!'
    }
  })

}
