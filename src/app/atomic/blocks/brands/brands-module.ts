import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BrandsComponent} from './brands-component'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {SectionHeaderModule} from '../../elements/headers/section-header/section-header.module'

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        SectionHeaderModule
    ],
    declarations: [BrandsComponent],
    exports: [BrandsComponent]
})

export class BrandsModule {
}
