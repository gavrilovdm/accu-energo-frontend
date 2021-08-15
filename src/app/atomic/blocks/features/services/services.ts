import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  templateUrl: './services.html',
  selector: 'app-services',
})
export class ServicesComponent {
  currentUrl = this.router.url

  constructor(
      private router: Router
  ) {
  }
}
