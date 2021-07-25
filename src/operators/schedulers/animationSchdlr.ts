import { animationFrameScheduler, interval } from 'rxjs'
import { takeWhile } from 'rxjs/operators'

export function animationSchdlr() {
  const ball = document.getElementById('ball')

  // animationFrameScheduler.schedule(function (position) {
  //   ball.style.transform = `translate3d(0, ${position}px, 0`
  //   if (position <= 300) {
  //     this.schedule(position + 1)
  //   }
  // }, 0, 0)

  interval(0, animationFrameScheduler)
    .pipe(
      takeWhile(value => value <= 300)
    ).subscribe(value => {
    ball.style.transform = `translate3d(0, ${value}px, 0`
  })
}
