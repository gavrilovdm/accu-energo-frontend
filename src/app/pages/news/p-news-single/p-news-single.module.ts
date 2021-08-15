import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {PNewsSingleCmp} from './p-news-single'
import {EOfferBottomModule} from '../../../atomic/blocks/offer-bottom/offer-bottom.module'
import {ELoadInformerModule} from '../../../atomic/elements/load-informer/load-informer.module'
import {AdvantagesModule} from '../../../atomic/blocks/features/advantages/advantages.module'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {LazyLoadModule} from '../../../handlers/img-lazy-load/lazy-load.module'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PNewsSingleCmp}]),
    ELoadInformerModule,
    EOfferBottomModule,
    AdvantagesModule,
    MatButtonModule,
    MatIconModule,
    LazyLoadModule
  ],
  declarations: [PNewsSingleCmp],
  exports: [RouterModule]
})
export class PNewsSingleModule {
}
