import { Controller } from 'stimulus'
import 'animate.css/animate.css'

export default class extends Controller {
  connect() {
    this.element.classList.add('bounceInDown')
  }
}
