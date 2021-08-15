import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CatalogFilterComponent} from './catalog-filter.component'
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatRadioModule} from '@angular/material/radio'
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatSelectModule} from '@angular/material/select'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule
    ],
  declarations: [CatalogFilterComponent],
  exports: [CatalogFilterComponent]
})
export class CatalogFilterModule {
}
