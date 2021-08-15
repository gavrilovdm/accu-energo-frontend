import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {BrandsComponent} from './brands'
import {LazyLoadModule} from '../../../../handlers/img-lazy-load/lazy-load.module'
import {MatCardModule} from '@angular/material/card'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LazyLoadModule,
        MatCardModule
    ],
  declarations: [BrandsComponent],
  exports: [BrandsComponent]
})
export class BrandsModule {
}
