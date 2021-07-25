import { of } from 'rxjs'
import { map, tap } from 'rxjs/operators'

export function tapRx() {
  of(1,2,3,4,5).pipe(
    tap(value => console.log('before', value)),
    map(value => value * 10),
    tap(value => console.log('after', value))
  ).subscribe(console.log)
}
