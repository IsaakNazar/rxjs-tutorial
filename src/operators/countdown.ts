import { EMPTY, fromEvent, interval, merge } from 'rxjs'
import { mapTo, scan, startWith, switchMap, switchMapTo, takeUntil, takeWhile, tap } from 'rxjs/operators'

export function countdown() {
  const countdown = document.getElementById('countdown')
  const message = document.getElementById('message')
  const pauseBtn = document.getElementById('pause')
  const startBtn = document.getElementById('start')
  const pauseClick$ = fromEvent(pauseBtn, 'click')
  const startClick$ = fromEvent(startBtn, 'click')
  const COUNT_FROM = 10

  const counter$ = merge(
    startClick$.pipe(mapTo(true)),
    pauseClick$.pipe(mapTo(false))
  ).pipe(
    switchMap(shouldStart => {
      return shouldStart ? interval(1000) : EMPTY // else do Nothing
    }),
    mapTo(1),
    scan((acc, cur) => {
      return acc - cur
    }, COUNT_FROM),
    tap(value => console.log('tap', value)),
    // filter(value => value >= 0)
    takeWhile(value => value >= 0),
    // takeUntil(pauseClick$),
    startWith(COUNT_FROM)
  )

  counter$.subscribe(value => {
    countdown.innerHTML = value.toString()
    if (!value) {
      message.innerHTML = 'Done!'
    }
  })

}
