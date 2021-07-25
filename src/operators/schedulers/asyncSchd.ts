import { asyncScheduler, of } from 'rxjs'
import { observeOn, subscribeOn, tap } from 'rxjs/operators'

export function asyncSchdrl() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  // const sub = asyncScheduler.schedule(
  //   console.log,
  //   2000,
  //   'async Schedule'
  // )
  // sub.unsubscribe()

  // of(4, 5, 6, asyncScheduler).subscribe(observer)
  of(4, 5, 6)
    .pipe(
      tap(val => console.log('from tap', val)),
      // observeOn(asyncScheduler, 2000),
      subscribeOn(asyncScheduler, 2000)
    )
    .subscribe(observer)

  // of(1, 2, 3).subscribe(observer)
  // console.log('hey')

}
