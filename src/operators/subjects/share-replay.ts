import { ajax } from 'rxjs/ajax'
import { fromEvent, of } from 'rxjs'
import { mergeMapTo, shareReplay } from 'rxjs/operators'

export function shareReplayRx() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const ajax$ = ajax('https://api.github.com/users/octocat')

  const click$ = fromEvent(document, 'click').pipe(
    mergeMapTo(ajax$),
    shareReplay(1, 10000)
  )

  const sub$ = of(1, 2, 3).pipe(
    shareReplay(1)
  )

  sub$.subscribe(observer)
  sub$.subscribe(observer)

  setTimeout(() => {
    console.log('some time later')
    sub$.subscribe(observer)
  }, 3000)
}
