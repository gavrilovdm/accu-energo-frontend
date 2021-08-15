import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EOfferBottomComponent} from './offer-bottom'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {ConsultationFormComponent} from './consultation-form.component'
import {ConsultationFormSuccessComponent} from './consultation-form-success.component'
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule
    ],
  declarations: [EOfferBottomComponent, ConsultationFormComponent, ConsultationFormSuccessComponent],
  exports: [EOfferBottomComponent]
})
export class EOfferBottomModule {
}
