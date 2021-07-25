import { BehaviorSubject, Subject } from 'rxjs'

export function behaviorSubj() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const subject = new BehaviorSubject('Hello')

  const subOne = subject.subscribe(observer)

  const subTwo = subject.subscribe(observer)
  subject.next('World')

  setTimeout(() => {
    subject.subscribe(observer)
  }, 3000)
}
