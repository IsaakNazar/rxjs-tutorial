import { interval, Subject } from 'rxjs'
import { multicast, refCount, share, tap } from 'rxjs/operators'
import { loadingService } from '../../services/loading.service'

export function subjects() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const subject = new Subject()

  const subscription = subject.subscribe(observer)
  const subscription2 = subject.subscribe(observer)

  const interval$ = interval(2000).pipe(
    tap(val => console.log('new interval', val))
  )

  // interval$.subscribe(observer)
  interval$.subscribe(subject)
}

export function loadStateSubjects() {
  const loadingOverlay = document.getElementById('loading-overlay')

  loadingService.loadingStatus$.subscribe(isLoading => {
    loadingOverlay.classList[isLoading ? 'add' : 'remove']('open')
  })

  setTimeout(() => loadingService.hideLoading(), 3000)
}

export function multicastSubject() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const interval$ = interval(2000).pipe(
    tap(val => console.log('new interval', val))
  )

  const multicastedInterval$ = interval$.pipe(
    // can be replaced by share()
    // multicast(() => new Subject()),
    // refCount()
    share()
  )

  const subOne = multicastedInterval$.subscribe(observer)
  const subTwo = multicastedInterval$.subscribe(observer)

  setTimeout(() => {
    subOne.unsubscribe()
    subTwo.unsubscribe()
  }, 9000)
}
