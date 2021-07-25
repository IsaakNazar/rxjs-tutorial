import { fromEvent, interval, of } from 'rxjs'
import { concatMap, delay, switchMap, take } from 'rxjs/operators'

export function concatMapRx() {
  const click$ = fromEvent(document, 'click')
  const interval$ = interval(1000)

  // click$.pipe(
  //   concatMap(() => interval$.pipe(take(3))) // first come first served
  // ).subscribe(console.log)

  const saveAnswer = answer => {
    // simulate delayed request to backend
    return of(`Saved: ${answer}`)
      .pipe(
        delay(1500)
      )
  }

  const radioBtns = document.querySelectorAll('.radioOptions')

  const answerChange$ = fromEvent(radioBtns, 'click')

  answerChange$.pipe(
    concatMap((evt: any) => saveAnswer(evt.target.value))
  ).subscribe(console.log)

}
