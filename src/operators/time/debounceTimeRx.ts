import { EMPTY, fromEvent } from 'rxjs'
import { catchError, debounceTime, distinctUntilChanged, pluck, switchMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export function debounceTimeRx() {
  const url = 'https://api.openbrewerydb.org/breweries/'
  const click$ = fromEvent(document, 'click')
  const input$ = fromEvent(document.getElementById('input-text'), 'keyup')

  click$.pipe(
    debounceTime(1000)
  ).subscribe(console.log)

  input$.pipe(
    debounceTime(200),
    pluck('target', 'value'),
    distinctUntilChanged(),
    switchMap(search => {
      return ajax.getJSON(`${url}?by_name=${search}`).pipe(
        catchError(() => EMPTY)
      )
    })
  ).subscribe(console.log)
}
