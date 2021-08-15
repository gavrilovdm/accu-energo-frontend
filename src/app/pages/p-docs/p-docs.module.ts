import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PDocsComponent} from './p-docs'
import {LazyLoadModule} from '../../handlers/img-lazy-load/lazy-load.module'
import {EOfferBottomModule} from '../../atomic/blocks/offer-bottom/offer-bottom.module'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {AdvantagesModule} from '../../atomic/blocks/features/advantages/advantages.module'
import {BackBtnModule} from '../../atomic/elements/back-btn/back-btn.module'
import {MatButtonModule} from '@angular/material/button'
import {PageHeaderModule} from '../../atomic/elements/headers/page-header/page-header.module'

const routes: Routes = [
  {
    path: '',
    component: PDocsComponent,
  },
  {
    path: ':category',
    component: PDocsComponent
  }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LazyLoadModule,
        EOfferBottomModule,
        MatExpansionModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        AdvantagesModule,
        BackBtnModule,
        MatButtonModule,
        PageHeaderModule
    ],
  declarations: [PDocsComponent],
  exports: [RouterModule]
})
export class PDocsModule {
}
