import { Observable } from 'rxjs'
import { scrollEvt } from './operators/operators-1'
import { throttleTimeRx } from './operators/throttleTimeRx'
import { debounceTimeRx } from './operators/debounceTimeRx'
import { sampleTimeRx } from './operators/sampleTimeRx'

function observe() {
  const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete')
  };

  const observable = new Observable(subscriber => {
    // subscriber.next('Push it to a subscriber')
    // subscriber.next('whats up')
    // subscriber.complete()
    // subscriber.next('whats up2')

    let count = 0;

    const id = setInterval(() => {
      subscriber.next(count)
      count++
    }, 1000)

    return () => {
      console.log('clear')
      clearInterval(id)
    }
  });

  console.log('before')
  const subs = observable.subscribe(observer);
  const subs2 = observable.subscribe(observer);

  subs.add(subs2)
  setTimeout(() => {
    subs.unsubscribe()
  }, 4000)
  console.log('after')
}
scrollEvt()


sampleTimeRx()


