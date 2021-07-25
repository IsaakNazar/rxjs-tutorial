import { fromEvent, timer } from 'rxjs'
import { exhaustMap, finalize, pluck, switchMap, takeUntil, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export function labRandomDogs() {
  const startBtn = document.getElementById('start-poll'),
    stopBtn = document.getElementById('stop-poll'),
    pollStatus = document.getElementById('poll-status')

  const clickStart$ = fromEvent(startBtn, 'click')
  const clickStop$ = fromEvent(stopBtn, 'click')

  clickStart$.pipe(
    exhaustMap(() => timer(0, 4000).pipe(
      tap(() => pollStatus.innerHTML = 'Active'),
      switchMap(() => getDogs()),
      takeUntil(clickStop$),
      finalize(() => pollStatus.innerHTML = 'Stopped') // callback called once on completion of observable
    ))
  ).subscribe((resp: any) => {
    (<HTMLImageElement>document.getElementById('dog')).src = resp
  })

  const getDogs = () => {
    return ajax.getJSON('https://random.dog/woof.json')
      .pipe(
        pluck('url')
      )
  }
}
