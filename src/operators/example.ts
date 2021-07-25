import { from, fromEvent, interval, of, range, timer } from 'rxjs'

export function doFromEvent() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }
  const source$ = fromEvent(document, 'click')

  const sub1 = source$.subscribe(observer)
  const sub2 = source$.subscribe(observer)

  setTimeout(() => {
    console.log('unsubscribe')
    sub1.unsubscribe()
  }, 3000)
}

export function doOf() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const source$ = of(1, 2, 3, 4, 5)
  const range$ = range(1, 4)
  source$.subscribe(observer)
  range$.subscribe(observer)
}

export function doFrom() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const source$ = from('whats up')
  source$.subscribe(observer)
}

export function doInterval() {
  const interval$ = interval(3000)
  const timer$ = timer( 3500, 1000)
  timer$.subscribe(console.log)
}


