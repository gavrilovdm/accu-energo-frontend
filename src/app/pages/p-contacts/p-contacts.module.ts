import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PContactsComponent} from './p-contacts'
import {LazyLoadModule} from '../../handlers/img-lazy-load/lazy-load.module'
import {EOfferBottomModule} from '../../atomic/blocks/offer-bottom/offer-bottom.module'
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {AdvantagesModule} from '../../atomic/blocks/features/advantages/advantages.module'
import {MatListModule} from '@angular/material/list'
import {AngularYandexMapsModule} from 'angular8-yandex-maps'
import {PageHeaderModule} from '../../atomic/elements/headers/page-header/page-header.module'

const routes: Routes = [
  {
    path: '',
    component: PContactsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LazyLoadModule,
    EOfferBottomModule,
    MatTabsModule,
    MatIconModule,
    AdvantagesModule,
    MatListModule,
    AngularYandexMapsModule,
    PageHeaderModule
  ],
  declarations: [PContactsComponent],
  exports: [RouterModule]
})
export class PContactsModule {
}
