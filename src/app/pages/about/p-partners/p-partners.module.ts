import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {PPartnersComponent} from './p-partners'
import {EOfferBottomModule} from '../../../atomic/blocks/offer-bottom/offer-bottom.module'
import {MatCardModule} from '@angular/material/card'
import {AdvantagesModule} from '../../../atomic/blocks/features/advantages/advantages.module'
import {MatButtonModule} from '@angular/material/button'
import {UnderHeaderModule} from '../../../atomic/elements/under-header/under-header.module'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: PPartnersComponent}]),
        EOfferBottomModule,
        MatCardModule,
        AdvantagesModule,
        MatButtonModule,
        UnderHeaderModule
    ],
  declarations: [PPartnersComponent],
  exports: [RouterModule]
})
export class PPartnersModule {
}
