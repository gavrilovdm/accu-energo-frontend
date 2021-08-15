import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {CatalogListComponent} from './catalog-list.component'
import {LazyLoadModule} from '../../../handlers/img-lazy-load/lazy-load.module'
import {CatalogFilterModule} from '../../../atomic/blocks/catalog-filter/catalog-filter.module'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'
import {MatSortModule} from '@angular/material/sort'
import {HomeCatalog} from '../../../atomic/elements/product-categories/product-categories.module'
import {PageHeaderModule} from '../../../atomic/elements/headers/page-header/page-header.module'
import {MatExpansionModule} from '@angular/material/expansion'
import {BrandsModule} from '../../../atomic/blocks/brands/brands-module'
import {ReactiveFormsModule} from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CatalogListComponent
            }
        ]),
        LazyLoadModule,
        CatalogFilterModule,
        MatProgressBarModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        HomeCatalog,
        PageHeaderModule,
        MatExpansionModule,
        BrandsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatButtonModule
    ],
  declarations: [CatalogListComponent],
  exports: [RouterModule]
})
export class CatalogListModule {
}
