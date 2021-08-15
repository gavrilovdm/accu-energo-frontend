import {Component} from '@angular/core'
import {DataService} from '../../../handlers/data/data.service'
import {Router} from '@angular/router'

@Component({
  templateUrl: './product-categories.html',
  selector: 'app-product-categories',
  styles: [`
    .productCategoryImg {
      cursor: pointer;
      transition: 400ms ease-in-out;
    }
  `]
})
export class ProductCategoriesComponent {
  items = this.data.catalogPreview
  currentLink = this.router.url

  constructor(
      public data: DataService,
      private router: Router
  ) {
  }
}
