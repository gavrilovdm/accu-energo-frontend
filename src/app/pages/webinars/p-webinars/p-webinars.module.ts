import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PWebinarsComponent} from './p-webinars'
import {ELoadInformerModule} from '../../../atomic/elements/load-informer/load-informer.module'
import {EOfferBottomModule} from '../../../atomic/blocks/offer-bottom/offer-bottom.module'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {AdvantagesModule} from '../../../atomic/blocks/features/advantages/advantages.module'
import {PageHeaderModule} from '../../../atomic/elements/headers/page-header/page-header.module'

const routes: Routes = [
  {
    path: '',
    component: PWebinarsComponent
  }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ELoadInformerModule,
        EOfferBottomModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        AdvantagesModule,
        PageHeaderModule
    ],
  declarations: [PWebinarsComponent],
  exports: [RouterModule]
})
export class PWebinarsModule {
}
