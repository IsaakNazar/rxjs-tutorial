import { asyncScheduler, from, fromEvent, interval, of } from 'rxjs'
import { map, pluck, reduce, take, tap, throttleTime } from 'rxjs/operators'
import { makeLogger } from 'ts-loader/dist/logger'

export function doMap() {
  of(1, 2, 3, 4, 5)
    .pipe(
      map(value => value * 5)
    ).subscribe(console.log)

  const $keydown = fromEvent(document, 'keydown')
  const $keycode = $keydown.pipe(
    map((event: KeyboardEvent) => event.key)
  )

  const $keycodeWithPluck = $keydown.pipe(
    pluck('code')
  )

  $keycodeWithPluck.subscribe(console.log)
}

export function scrollEvt() {
  const progressElement = document.querySelector('.progress') as any
  const scroll$ = fromEvent(document, 'scroll')
  const progress$ = scroll$.pipe(
    throttleTime(30, asyncScheduler, {leading: false, trailing: true}),
    // percent progress
    map(({target}: any) => calculateScrollPercent(target.documentElement)),
  )
  progress$.subscribe(value => progressElement.style.width = value + '%')
}

function calculateScrollPercent(elem) {
  const { scrollTop, scrollHeight, clientHeight } = elem
  return (scrollTop / (scrollHeight - clientHeight)) * 100
}

export function doReduce() {
  const nums = [1,2,3,4,5]
  const totalReducer = (accumulator, current) => {
    return accumulator + current
  }

  interval(1000).pipe(
    take(4),
    reduce(totalReducer, 0)
  ).subscribe({
    next: console.log,
    complete: () => console.log('completed')
  })
}
