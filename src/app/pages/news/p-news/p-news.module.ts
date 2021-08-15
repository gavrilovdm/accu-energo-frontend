import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {PNewsComponent} from './p-news'
import {EOfferBottomModule} from '../../../atomic/blocks/offer-bottom/offer-bottom.module'
import {CardPreviewModule} from '../../../atomic/blocks/news/card-preview/card-preview.module'
import {MatButtonModule} from '@angular/material/button'
import {AdvantagesModule} from '../../../atomic/blocks/features/advantages/advantages.module'
import {ELoadInformerModule} from '../../../atomic/elements/load-informer/load-informer.module'
import {PageHeaderModule} from '../../../atomic/elements/headers/page-header/page-header.module'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: PNewsComponent}]),
        EOfferBottomModule,
        CardPreviewModule,
        MatButtonModule,
        AdvantagesModule,
        ELoadInformerModule,
        PageHeaderModule
    ],
  declarations: [PNewsComponent],
  exports: [RouterModule]
})
export class PNewsModule {
}
