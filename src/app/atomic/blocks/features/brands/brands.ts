import {Component, Input} from '@angular/core'
import {DataService} from '../../../../handlers/data/data.service'
import {Observable} from 'rxjs'
import {environment} from '../../../../../environments/environment'
import {BrandInterface} from '../../../../handlers/data/brand.interface'
import {Router} from '@angular/router'

@Component({
  templateUrl: './brands.html',
  selector: 'app-brands'
})
export class BrandsComponent {
  items: Observable<BrandInterface[]> = this.data.brandsData
  url = environment.imgUrl

  constructor(
    private data: DataService,
    private router: Router
  ) {
  }

  showBrand(brand: BrandInterface): void {
    this.data.selectedBrands = []
    this.data.selectedBrands.push(brand.title)

    this.router.navigate(['/catalog'], {
      queryParams: {brands: brand.title, productType: 'accumulators'}
    })
  }
}
