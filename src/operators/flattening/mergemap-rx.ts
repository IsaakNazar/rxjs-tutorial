import { fromEvent, interval } from 'rxjs'
import { map, mergeMap, takeUntil } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export function mergeMapRx() {
  const click$ = fromEvent(document, 'click')
  const mouseup$ = fromEvent(document, 'mouseup')
  const mousedown$ = fromEvent(document, 'mousedown')
  const interval$ = interval(1000)

  // click$.pipe(
  //   mergeMap(() => interval$)
  // ).subscribe(console.log)

  // mousedown$.pipe(
  //   mergeMap(() => interval$.pipe(
  //     takeUntil(mouseup$)
  //   ))
  // ).subscribe(console.log)

const coordinates$ = click$.pipe(
  map((evt: any) => ({
    x: evt.clientX,
    y: evt.clientY
  }))
)

  const coordsWithSave$ = coordinates$.pipe(
    mergeMap(coords => ajax.post('https://run.mocky.io/v3/334bfd9e-8a8e-40d2-b348-0c985e7c2ce2', coords))
  )

  coordsWithSave$.subscribe(console.log)

}
