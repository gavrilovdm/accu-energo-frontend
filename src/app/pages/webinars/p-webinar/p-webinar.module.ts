import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PWebinarComponent} from './p-webinar'
import {EOfferBottomModule} from '../../../atomic/blocks/offer-bottom/offer-bottom.module'
import {LazyLoadModule} from '../../../handlers/img-lazy-load/lazy-load.module'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {AdvantagesModule} from '../../../atomic/blocks/features/advantages/advantages.module'
import {MatCardModule} from '@angular/material/card'
import {BackBtnModule} from '../../../atomic/elements/back-btn/back-btn.module'
import {RegistrationComponent} from './registration.component'
import {MatDialogModule} from '@angular/material/dialog'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {RegistrationSuccessComponent} from './registration-success.component'

const routes: Routes = [
  {
    path: '',
    component: PWebinarComponent
  }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EOfferBottomModule,
        LazyLoadModule,
        MatIconModule,
        MatButtonModule,
        AdvantagesModule,
        MatCardModule,
        BackBtnModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
  declarations: [PWebinarComponent, RegistrationComponent, RegistrationSuccessComponent],
  exports: [RouterModule]
})
export class PWebinarModule {
}
