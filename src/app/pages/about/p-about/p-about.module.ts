import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {PAboutComponent} from './p-about'
import {EOfferBottomModule} from '../../../atomic/blocks/offer-bottom/offer-bottom.module'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {UnderHeaderModule} from '../../../atomic/elements/under-header/under-header.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PAboutComponent}]),
    EOfferBottomModule,
    MatCardModule,
    MatButtonModule,
    UnderHeaderModule
  ],
  declarations: [PAboutComponent],
  exports: [RouterModule]
})
export class PAboutModule {
}
