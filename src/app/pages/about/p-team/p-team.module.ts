import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PTeamComponent} from './p-team'
import {EOfferBottomModule} from '../../../atomic/blocks/offer-bottom/offer-bottom.module'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {AdvantagesModule} from '../../../atomic/blocks/features/advantages/advantages.module'
import {UnderHeaderModule} from '../../../atomic/elements/under-header/under-header.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PTeamComponent}]),
    EOfferBottomModule,
    MatCardModule,
    MatIconModule,
    AdvantagesModule,
    UnderHeaderModule
  ],
  declarations: [PTeamComponent],
  exports: [RouterModule]
})
export class PTeamModule {
}
