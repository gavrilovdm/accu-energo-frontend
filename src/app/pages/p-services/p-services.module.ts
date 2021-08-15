import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PServicesComponent} from './p-services'
import {LazyLoadModule} from '../../handlers/img-lazy-load/lazy-load.module'
import {EOfferBottomModule} from '../../atomic/blocks/offer-bottom/offer-bottom.module'
import {MatCardModule} from '@angular/material/card'
import {ServicesModule} from '../../atomic/blocks/features/services/services.module'
import {UnderHeaderModule} from '../../atomic/elements/under-header/under-header.module'

const routes: Routes = [
  {
    path: '',
    component: PServicesComponent
  }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LazyLoadModule,
        EOfferBottomModule,
        MatCardModule,
        ServicesModule,
        UnderHeaderModule
    ],
  declarations: [PServicesComponent],
  exports: [RouterModule]
})
export class PServicesModule {
}
