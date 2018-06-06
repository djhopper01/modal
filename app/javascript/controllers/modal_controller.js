import { Controller } from 'stimulus'
import 'animate.css/animate.css'
import 'load-awesome/css/ball-spin-clockwise'

export default class extends Controller {
  static targets = [ 'form', 'activity' ]

  connect() {
    this.element.classList.add('bounceInDown')
  }

  submit(evt) {
    evt.preventDefault()

    this.formTarget.style.filter = 'blur(1px)'
    this.activityTarget.style.display = 'block'

    setTimeout(() => {
      this.element.classList.add('bounceOutUp')
    }, 1000)
  }
}
