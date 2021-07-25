import { from } from 'rxjs'
import { distinctUntilKeyChanged, map, scan } from 'rxjs/operators'

export function doScan() {
  const nums = [1, 2, 3, 4, 5]

  // from(nums).pipe(
  //   scan((acc, cur) => {
  //     return acc + cur
  //   }, 0)
  // ).subscribe(console.log)


  const user = [
    {name: 'Kate', loggedIn: false, token: null},
    {name: 'Kate', loggedIn: true, token: '123'},
    {name: 'Kate', loggedIn: true, token: 'qwe'}
  ]

  const state$ = from(user).pipe(
    scan((acc, cur) => {
      return {...acc, ...cur}
    }, {})
  )
  const names$ = state$.pipe(
    // @ts-ignore
    distinctUntilKeyChanged("name"),
    map((item: any) => item.name)
  )

  names$.subscribe(console.log)
}
