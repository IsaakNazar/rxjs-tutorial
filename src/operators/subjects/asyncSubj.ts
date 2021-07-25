import { AsyncSubject } from 'rxjs'

export function asyncSubj() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const subject = new AsyncSubject()
  subject.subscribe(observer)
  subject.subscribe(observer)

  subject.next('hello')
  subject.next('world')
  subject.complete() // asyncSubject fires only when complete() will called
}
