import { ReplaySubject } from 'rxjs'

export function replaySubj() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  const subject = new ReplaySubject(2)
  subject.next('Hello')
  subject.next('World')
  subject.next('of tanks')

  subject.subscribe(observer)
}
