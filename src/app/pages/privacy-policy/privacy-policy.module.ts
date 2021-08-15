import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PrivacyPolicyComponent} from './privacy-policy.component'
import {RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card'
import {EOfferBottomModule} from '../../atomic/blocks/offer-bottom/offer-bottom.module'
import {AdvantagesModule} from '../../atomic/blocks/features/advantages/advantages.module'
import {PageHeaderModule} from '../../atomic/elements/headers/page-header/page-header.module'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: PrivacyPolicyComponent}]),
        MatCardModule,
        EOfferBottomModule,
        AdvantagesModule,
        PageHeaderModule
    ],
  declarations: [PrivacyPolicyComponent],
  exports: [RouterModule]
})

export class PrivacyPolicyModule {}
