import { of } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

export function distinctUntil() {
  const nums$ = of(1, 1, 2, 3, 3, 3, 4, 1,4, 5)
  nums$.pipe(
    distinctUntilChanged()
  ).subscribe(console.log)
}

