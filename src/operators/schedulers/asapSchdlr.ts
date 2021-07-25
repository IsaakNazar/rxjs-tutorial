import { asapScheduler, asyncScheduler } from 'rxjs'

export function asapSchdlr() {
  const observer = {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete: () => console.log('complete')
  }

  asyncScheduler.schedule(() => {
    console.log('asyncScheduler')
  })
  queueMicrotask(() => {
    console.log('from microtask')
  })
  asapScheduler.schedule(() => {
    console.log('asapScheduler')
  })
  Promise.resolve('from promise').then(console.log)
  console.log('synchronous log')
}
