import { of } from 'rxjs'
import { endWith, startWith } from 'rxjs/operators'

export function startEndWith() {
  const numbers$ = of(1,2,3)

  numbers$.pipe(
    endWith(10, 11),
    startWith('hey', 21)
  ).subscribe(console.log)
}
