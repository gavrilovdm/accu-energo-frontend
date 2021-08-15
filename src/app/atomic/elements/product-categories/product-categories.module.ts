import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductCategoriesComponent} from './product-categories'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {RouterModule} from '@angular/router'
import {EElevationDirectiveModule} from '../elevation/elevation.module'

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule, EElevationDirectiveModule],
  declarations: [ProductCategoriesComponent],
  exports: [ProductCategoriesComponent]
})
export class HomeCatalog {
}
