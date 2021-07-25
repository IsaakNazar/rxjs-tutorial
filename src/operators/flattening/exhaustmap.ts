import { fromEvent, interval } from 'rxjs'
import { concatMap, exhaustMap, take } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export function exhaustMapRx() {
  const click$ = fromEvent(document, 'click')
  const interval$ = interval(1000)

  const loginBtn$ = fromEvent(document.getElementById('login'), 'click')

  click$.pipe(
    exhaustMap(() => interval$.pipe(take(3))) // ignore next values until the previous obs completes
  ).subscribe(console.log)

  const authenticateUser = () => {
    return ajax.post(
      'https://reqres.in/api/login',
      {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    )
  }

  loginBtn$.pipe(
    exhaustMap(() => authenticateUser())
  ).subscribe(console.log)

}
