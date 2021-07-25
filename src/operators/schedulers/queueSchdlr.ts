import { queueScheduler } from 'rxjs'

export function queueSchdlr() {
  queueScheduler.schedule(() => {
    queueScheduler.schedule(() => {
      console.log('inner queue')
    })
    console.log('first queue')
  })
  console.log('sync')
}


