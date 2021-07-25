import { combineLatest, fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export function combineLatestRx() {
  // elements
  const first = document.getElementById('first')
  const second = document.getElementById('second')

  // streams
  const keyup$ = fromEvent(document, 'keyup')
  const click$ = fromEvent(document, 'click')

  // helpers
  const keyupAsValue = elem => {
    return fromEvent(elem, 'keyup').pipe(
      map((evt: {target: Element}) => {
        const target = (evt.target as HTMLInputElement).valueAsNumber
      })
    )
  }

  combineLatest([keyup$, click$, click$])
    .subscribe(console.log)
}
