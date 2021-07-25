import { ObservableStore } from './store'
export function exampleSubject() {
  const store = new ObservableStore({
    user: 'Luke',
    isAuthenticated: false
  })

  store.selectState('user').subscribe(console.log)

  store.updateState({
    user: 'Joe'
  })
}

