import {Component} from '@angular/core'

@Component({
  templateUrl: './footer.html',
  selector: 'app-footer'
})
export class FooterComponent {
  year = new Date().getFullYear()
}
